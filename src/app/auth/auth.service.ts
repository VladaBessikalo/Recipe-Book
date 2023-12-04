import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

export enum ErrorResponses {
  EMAIL_EXISTS = 'EMAIL_EXISTS',
  INVALID_LOGIN_CREDENTIALS = 'INVALID_LOGIN_CREDENTIALS'
}

export enum ErrorUIMessages {
  DEFAULT = 'An unknown message occurred!',
  EMAIL_EXISTS = 'This email already exists!!!',
  INVALID_CREDENTIALS = 'Your password or email is invalid!'
}

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient,
              private router: Router) { }


  signup(email: string, password: string) {
    return this.http
    .post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey, 
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(
      catchError(this.handleError), 
      tap(resData => {
        this.handleAuthentification(
          resData.email, 
          resData.localId, 
          resData.idToken,
          +resData.expiresIn
          )
      })
    );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey, 
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentification(
            resData.email, 
            resData.localId, 
            resData.idToken,
            +resData.expiresIn
            )
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    } 

    const loadedUser = new User(
      userData.email, 
      userData.id, 
      userData._token, 
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  // Закінчила розбиратись тут. 
  autoLogout(expirationDuration: number) {
    console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration)
  }

  private handleAuthentification(
    email: string, 
    userId: string, 
    token: string, 
    expiresIn: number
    ) {
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000
    );
    const user = new User(
      email, 
      userId, 
      token, 
      expirationDate
    );
    this.user.next(user);
    this.autoLogout(expiresIn * 1000)
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse): Observable<any> {
    let errorMessage = ErrorUIMessages.DEFAULT;

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    
    switch (errorRes.error.error.message) {
      case ErrorResponses.EMAIL_EXISTS:
        errorMessage = ErrorUIMessages.EMAIL_EXISTS;
        break;
      case ErrorResponses.INVALID_LOGIN_CREDENTIALS: 
        errorMessage = ErrorUIMessages.INVALID_CREDENTIALS;
        break;
    }

    return throwError(errorMessage);
  }
}
