import { Component } from '@angular/core';
import { RoutingService } from '../../services/routing.service';
import { SecurityService } from '../../services/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public readonly routingService: RoutingService, public readonly securityService: SecurityService){}
}
