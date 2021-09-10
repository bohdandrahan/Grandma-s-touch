import { Ingredient } from '../shared/ingredient.model'
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[] = [new Ingredient('Orange', 3), new Ingredient('Meat', 5)]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
