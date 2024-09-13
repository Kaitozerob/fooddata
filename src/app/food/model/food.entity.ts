export class FoodEntity {
  "fdcId": string;
  "description": string;
  "dataType": string;
  "publicationDate": string;
  "foodCode": string;
  "foodNutrients": Array<{
    "number": string;
    "name": string;
    "amount": string;
    "unitName": string;
  }>;

  constructor(data: any) {
    this.fdcId = data.fdcId || '';
    this.description = data.description || '';
    this.dataType = data.dataType || '';
    this.publicationDate = data.publicationDate || '';
    this.foodCode = data.foodCode || '';
    this.foodNutrients = data.foodNutrients || [];
  }
}
