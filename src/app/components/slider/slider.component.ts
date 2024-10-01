import { Component } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  constructor(public readonly imageService: ImageService, public readonly securityService: SecurityService) {}
}
