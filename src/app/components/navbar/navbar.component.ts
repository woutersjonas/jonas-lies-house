import { Component } from '@angular/core';
import { RoutingService } from '../../services/routing.service';
import { SecurityService } from '../../services/security.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public readonly routingService: RoutingService, public readonly securityService: SecurityService){}
}
