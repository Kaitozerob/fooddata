import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {

  baseUrl = 'https://api.nal.usda.gov/fdc/v1/foods';
  apiKey = 'lirbImffz49mW7PtOilUEhHepps8xaUtDuUkPtwt'

  constructor(private http: HttpClient) { }

  getFoods()  {
    return this.http.get(`${this.baseUrl}/list?api_key=${this.apiKey}`);
    //https://api.nal.usda.gov/fdc/v1/foods/list?&api_key=lirbImffz49mW7PtOilUEhHepps8xaUtDuUkPtwt
  }

}
