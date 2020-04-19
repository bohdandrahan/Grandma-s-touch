import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('TestRec1','This is a test','https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg'),    new Recipe('TestRec','This is a test','https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg'),
    new Recipe('TestRec2','This is a test','https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg'),
    new Recipe('TestRec3','This is a test','https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg'),
    new Recipe('TestRec4','This is a test','https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg')];

  constructor() { }
  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    console.log('Recipe-list')
    this.recipeSelected.emit(recipe)
  }
}
