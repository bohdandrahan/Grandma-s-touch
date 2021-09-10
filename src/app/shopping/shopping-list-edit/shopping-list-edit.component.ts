import { Component, OnInit, ViewChild, Output, ElementRef } from '@angular/core';

import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list.service'

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("amountInput", { static: true }) amount: ElementRef;
  @ViewChild("nameInput", { static: true }) name: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.shoppingListService.addIngredient(this.generateNewIngedient());
  }
  generateNewIngedient() {
    return new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value)
  }

  onClear() {
    this.amount.nativeElement.value = '';
    this.name.nativeElement.value = '';
  }
}
