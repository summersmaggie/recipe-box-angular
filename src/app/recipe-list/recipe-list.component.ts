import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../models/recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(recipeToEdit: Recipe) {
  this.clickSender.emit(recipeToEdit);
  }

}
