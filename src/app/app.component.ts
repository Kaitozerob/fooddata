import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FoodContentComponent} from "./public/food-content/food-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fooddata';
}

