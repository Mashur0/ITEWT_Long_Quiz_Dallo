import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  newIngredientName: string = '';
  newIngredientAmount: number = 0;
  ingredients: Ingredient[] = []; // Declare the ingredients array property

  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    if (this.newIngredientName.trim() === '' || this.newIngredientAmount <= 0) {
      alert('Please enter a valid ingredient name and amount.');
      return;
    }
    this.ingredients.push(new Ingredient(this.newIngredientName, this.newIngredientAmount));
    this.newIngredientName = '';
    this.newIngredientAmount = 0;
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  clearIngredients() {
    this.ingredients = [];
  }
}

