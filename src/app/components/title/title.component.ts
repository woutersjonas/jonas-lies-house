import { Component } from '@angular/core';
import { StandardValuesService } from '../../services/standard-values.service';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  constructor(public readonly standardValueService: StandardValuesService) {}
}
