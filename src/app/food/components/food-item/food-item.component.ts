import {Component, Input} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {FoodEntity} from "../../model/food.entity";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    NgForOf
  ],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css'
})
export class FoodItemComponent {
  @Input() food!: FoodEntity;

}
