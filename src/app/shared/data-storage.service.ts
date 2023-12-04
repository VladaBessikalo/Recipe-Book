import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap, take, exhaustMap, pipe } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService,
              private shoppingListService: ShoppingListService) { 
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://recipe-book-4efba-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', 
        recipes)
      .subscribe(response => {
        console.log('Response', response);
      })
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(
      'https://recipe-book-4efba-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
    )
    .pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    )
  }

  storeShoppingList() {
    const ingredients = this.shoppingListService.getIngridients();
    this.http
      .put(
        'https://recipe-book-4efba-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json', 
        ingredients)
      .subscribe(response => {
        console.log('Response', response);
      })
  }

  fetchShoppingList() {
    return this.http.get<Ingredient[]>(
      'https://recipe-book-4efba-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json'
    )
    .pipe(
      map(ingredients => {
        return ingredients.map(ingredient => {
          return {
            ...ingredient         
          };
        });
      }),
      tap(ingredients => {
        this.shoppingListService.addIngredients(ingredients);
      })
    )
  }
}
