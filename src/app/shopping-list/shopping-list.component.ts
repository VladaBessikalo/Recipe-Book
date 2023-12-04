import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { LogginService } from '../loggin.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})

export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[] = [];
  private subscription: Subscription;

  constructor(
    private shoppingListService: ShoppingListService,
    private logginService: LogginService
  ) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngridients();

    this.subscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
    
    this.logginService.printLog('Hello from Shopping list Component');
  }

  onEditItem(index: number): void {
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
