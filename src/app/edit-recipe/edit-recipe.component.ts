import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {
  @Input() selectedRecipe: Recipe;
  @Output() clickSender = new EventEmitter();
  @Output() clickedDone = new EventEmitter();

  editButtonClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }

  finishedEditing() {
    this.clickedDone.emit();
  }

}
