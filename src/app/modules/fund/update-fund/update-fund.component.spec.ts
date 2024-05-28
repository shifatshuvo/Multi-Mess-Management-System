import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFundComponent } from './update-fund.component';

describe('UpdateFundComponent', () => {
  let component: UpdateFundComponent;
  let fixture: ComponentFixture<UpdateFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateFundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
