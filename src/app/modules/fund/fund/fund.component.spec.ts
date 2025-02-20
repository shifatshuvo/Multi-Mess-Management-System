import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundComponent } from './fund.component';

describe('FundComponent', () => {
  let component: FundComponent;
  let fixture: ComponentFixture<FundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
