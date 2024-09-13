import {Component, inject} from '@angular/core';
import {FooterContentComponent} from "../footer-content/footer-content.component";
import {ToolbarContentComponent} from "../toolbar-content/toolbar-content.component";
import {TranslateSwitchComponent} from "../translate-switch/translate-switch.component";
import {FoodListComponent} from "../../food/components/food-list/food-list.component";
import {FoodItemComponent} from "../../food/components/food-item/food-item.component";
import {FoodEntity} from "../../food/model/food.entity";
import {FoodApiService} from "../../food/services/food-api.service";
import {MatToolbar} from "@angular/material/toolbar";
import {MatListItem, MatNavList} from "@angular/material/list";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-food-content',
  standalone: true,
  imports: [
    FooterContentComponent,
    ToolbarContentComponent,
    TranslateSwitchComponent,
    FoodListComponent,
    FoodItemComponent,
    MatToolbar,
    MatNavList,
    MatListItem,
    FooterContentComponent,
    NgForOf,
  ],
  templateUrl: './food-content.component.html',
  styleUrl: './food-content.component.css'
})
export class FoodContentComponent {

}







