import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model"
import { ShoppingListService } from './shopping-list.service'

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ngOnInit() { }
}
