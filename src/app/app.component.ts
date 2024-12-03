import { Component, HostListener, OnInit } from '@angular/core';
import { ImageService } from './services/image.service';
import { RoutingService } from './services/routing.service';
import { SecurityComponent } from "./components/security/security.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TitleComponent } from "./components/title/title.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SecurityComponent, HomeComponent, NavbarComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isOnSliderRouting: boolean = false;
  constructor(
    private readonly imageService: ImageService,
    private readonly routingService: RoutingService
  ) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if(this.routingService.routing === "slider") {
      if(event.key === "ArrowRight") { this.imageService.nextImage() }
      if(event.key === "ArrowLeft") { this.imageService.prevImage() }
    }
  }
}
