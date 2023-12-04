import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
    selector: 'app-header', 
    templateUrl: 'header.component.html',
})

export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated = false;
    private userSub: Subscription;

    constructor (
        private dataStorageService: DataStorageService,
        private authService: AuthService,
        private recipeService: RecipeService
    ) {}

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = Boolean(user);
        });  
    }

    onSaveData(): void {
        this.dataStorageService.storeRecipes()
        this.dataStorageService.storeShoppingList();
    }

    onFetchData(): void {
        this.dataStorageService.fetchRecipes().subscribe();
        this.dataStorageService.fetchShoppingList().subscribe();
    }

    onLogout(): void {
        this.authService.logout();
        
        this.recipeService.setRecipes([]);
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
}