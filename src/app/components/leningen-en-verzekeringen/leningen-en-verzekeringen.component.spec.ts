import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeningenEnVerzekeringenComponent } from './leningen-en-verzekeringen.component';

describe('LeningenEnVerzekeringenComponent', () => {
  let component: LeningenEnVerzekeringenComponent;
  let fixture: ComponentFixture<LeningenEnVerzekeringenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeningenEnVerzekeringenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeningenEnVerzekeringenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
