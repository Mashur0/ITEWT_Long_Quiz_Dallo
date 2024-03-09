import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor() { }

  ngOnInit() {
    // Initialize with some sample recipes
    this.newRecipe({ recipeName: 'Test Recipe #1', recipeDesc: 'This is a test that it works 1', recipeimage:"https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg" });
    this.newRecipe({ recipeName: 'Test Recipe #2', recipeDesc: 'This is a test that it works 2',  recipeimage: "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'"});
  }
  
  newRecipe(recipe: { recipeName: string; recipeDesc: string; recipeimage: string }) {
    const newRecipe = new Recipe(recipe.recipeName, recipe.recipeDesc, recipe.recipeimage);
    this.recipes.push(newRecipe);
  }
}