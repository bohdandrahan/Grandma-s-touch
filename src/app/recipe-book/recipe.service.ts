import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping/shopping-list.service'

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('TestRec1', 'This is a test', 'https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg'),
    new Recipe('TestRec2', 'This is a test', 'https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg')];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  addToShoppingList(ingredients) {
    for (let each of ingredients) {
      this.addIngredientToShoppingList(each)
    }
  }
  addIngredientToShoppingList(ingredient) {
    this.shoppingListService.addIngredient(ingredient)
  }
  // this.recipeService.addToShoppingList(this.recipe.ingredients)

}
