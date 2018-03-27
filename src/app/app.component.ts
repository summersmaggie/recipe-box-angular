import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Your Recipe Book';

  selectedRecipe: null;

  masterRecipeList: Recipe[] = [
    new Recipe("Green Eggs and Ham", "Take two eggs and cook them in a pan set on medium heat. When they are done, put them on a plate and dollop pesto on top. Cook a few slices of Canadian bacon in the pan and serve next to the eggs. Serve with your preferred bread.", "Eggs with pesto served with Canadian bacon and a slice of bread. Serve with rice to make gluten-free.", ["eggs", "pesto", "olive oil", "ham", "salt", "pepper", "bread"], ["breakfast", "dairy-free", "gluten-free option"], "https://www.starchefs.com/features/new_years_breakfast/2010/images/zoe_nathan_green_eggs.jpg"),
    new Recipe("Cheese Quesadilla", "In a pan skillet large enough to hold one of the tortillas flat, melt ½ of the butter. Fry one side of one of the tortillas, then remove it from the pan.Put the rest of the butter in the pan, then put the unfried tortilla in to cook. Immediately sprinkle the cheese on top of the tortilla in the pan, then top with the previously fried tortilla, browned side up. Press them together with a spatula and fry the quesadilla until the cheese is melted. Remove it from the pan and cut in wedges like a pizza. Top with sour cream and/or salsa.", ["butter", "flour tortillas", "shredded cheddar cheese", "salsa", "sour cream"], "https://img.sndimg.com/food/image/upload/w_560,h_315,c_fill,fl_progressive,q_80/v1/img/recipes/13/90/60/pZsItOeQF2e86cfSAtDV_quesadilla.JPG")
  ];

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
   this.selectedRecipe = null;
 }
}
