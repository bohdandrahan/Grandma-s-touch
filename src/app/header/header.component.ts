import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html'
})

export class HeaderComponent{
  @Output() pageSelector = new EventEmitter<string>();

  onRecipes(){
    this.pageSelector.emit('Recipes')
  }
  onShopping(){
    this.pageSelector.emit('Shopping')
  }
}
