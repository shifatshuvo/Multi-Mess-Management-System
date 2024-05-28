import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGroceryComponent } from './update-grocery.component';

describe('UpdateGroceryComponent', () => {
  let component: UpdateGroceryComponent;
  let fixture: ComponentFixture<UpdateGroceryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateGroceryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
