import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-renovation',
  templateUrl: './renovation.component.html',
  styleUrl: './renovation.component.scss'
})
export class RenovationComponent {
  @Input() renovationDocument: string = "";
}
