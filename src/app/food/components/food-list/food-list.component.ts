import {Component, inject, Input} from '@angular/core';
import {FoodEntity} from "../../model/food.entity";
import {FoodItemComponent} from "../food-item/food-item.component";
import {FoodApiService} from "../../services/food-api.service";

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [
    FoodItemComponent
  ],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {
  food: FoodEntity[] = [];

  constructor(private foodApi: FoodApiService) {}


  ngOnInit() {
    this.foodApi.getFoods().subscribe(
      (data: any)=> {
        this.food = data.map((item: any) => new FoodEntity(item));
        console.log(this.food);
      }
    )
  }

}

