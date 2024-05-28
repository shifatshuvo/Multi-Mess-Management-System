import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessReportComponent } from './mess-report.component';

describe('MessReportComponent', () => {
  let component: MessReportComponent;
  let fixture: ComponentFixture<MessReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
