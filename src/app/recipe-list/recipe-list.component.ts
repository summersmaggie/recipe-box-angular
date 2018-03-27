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
  show: number;
  myVar = false;

  editButtonClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }

  toggleShow(i) {
    //click on new recipeToEdit
    if (i !== this.show) {
      this.show = i;
      this.myVar = true;
    } else {
      //click on same recipe again
      if (this.myVar === false) {
        this.myVar = true;
    } else {
      this.myVar = false;
      }
    }
  }
}
