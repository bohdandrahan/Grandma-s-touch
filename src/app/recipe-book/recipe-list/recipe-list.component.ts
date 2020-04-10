import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('TestRec','This is a test','https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg'),    new Recipe('TestRec','This is a test','https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg'),
    new Recipe('TestRec','This is a test','https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg'),
    new Recipe('TestRec','This is a test','https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg'),
    new Recipe('TestRec','This is a test','https://p2.piqsels.com/preview/488/632/975/tomato-mozzarella-food-recipe-meal.jpg')];




  constructor() { }
  ngOnInit(): void {
  }
}
