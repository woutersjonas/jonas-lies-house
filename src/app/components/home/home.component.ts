import { Component } from '@angular/core';
import { RoutingService } from '../../services/routing.service';
import { SliderComponent } from '../slider/slider.component';
import { MoreInfoComponent } from '../more-info/more-info.component';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, MovieComponent, MoreInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public readonly routingService: RoutingService) {}
}
