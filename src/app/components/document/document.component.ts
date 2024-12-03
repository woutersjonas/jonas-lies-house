import { Component, Input } from '@angular/core';
import { SafePipe } from "../../pipes/safe.pipe";

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './document.component.html',
  styleUrl: './document.component.scss'
})
export class DocumentComponent {
  @Input() renovationDocument: string = "";
}
