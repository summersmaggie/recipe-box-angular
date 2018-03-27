import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  recipeClicked(recipeToDisplay: Recipe) {
    this.clickSender.emit(recipeToDisplay);
  }
}
