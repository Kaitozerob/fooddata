import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodContentComponent } from './food-content.component';

describe('FoodContentComponent', () => {
  let component: FoodContentComponent;
  let fixture: ComponentFixture<FoodContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
