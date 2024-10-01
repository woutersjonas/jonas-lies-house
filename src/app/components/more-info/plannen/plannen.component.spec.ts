import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannenComponent } from './plannen.component';

describe('PlannenComponent', () => {
  let component: PlannenComponent;
  let fixture: ComponentFixture<PlannenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlannenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlannenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
