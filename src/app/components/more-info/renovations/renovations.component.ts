import { Component } from '@angular/core';
import { DocumentsService } from '../../../services/documents.service';
import { DocumentComponent } from "../../document/document.component";

@Component({
  selector: 'app-renovations',
  standalone: true,
  imports: [DocumentComponent],
  templateUrl: './renovations.component.html',
  styleUrl: './renovations.component.scss'
})
export class RenovationsComponent {
  showBathroomQuote: boolean = false;
  showWindowsQuote: boolean = false;

  constructor(public readonly documentsService: DocumentsService) { }

  setBathroomQuote(value: boolean) {
    this.reset();
    this.showBathroomQuote = value;
  }

  setWindowQuote(value: boolean) {
    this.reset();
    this.showWindowsQuote = value;
  }

  reset() {
    this.showBathroomQuote = false;
    this.showWindowsQuote = false;
  }
}
