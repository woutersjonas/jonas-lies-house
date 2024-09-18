import { Component } from '@angular/core';
import { RoutingService } from '../../services/routing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public readonly routingService: RoutingService) {}
}
