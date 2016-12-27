import { Component, OnInit, Input } from '@angular/core';
import{Recipe} from '../recipe'
@Component({
  selector: 'rb-recipedetail',
  templateUrl: './recipedetail.component.html'
})
export class RecipedetailComponent implements OnInit {
@Input() selectedRecipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
