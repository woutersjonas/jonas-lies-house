import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentenMakelaarComponent } from './documenten-makelaar.component';

describe('DocumentenMakelaarComponent', () => {
  let component: DocumentenMakelaarComponent;
  let fixture: ComponentFixture<DocumentenMakelaarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DocumentenMakelaarComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(DocumentenMakelaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
