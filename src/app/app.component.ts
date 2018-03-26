import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentRecipe: string = 'Pizza';
  recipes: Recipe[] = [
    new Recipe('Quesdilla', 'bake at 425', ['cheese, rice']),
    new Recipe('Mashed Potatoes', 'mash potatoes', ['potatoes, butter, cheese, sour cream']),
    new Recipe('Pop Tart', 'bake stuff', ['strawberries'])
  ];

  selectedRecipe: null;
  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
   this.selectedRecipe = null;
 }
}
