import { Component, HostListener, OnInit } from '@angular/core';
import { ImageService } from './services/image.service';
import { RoutingService } from './services/routing.service';

@Component({
  selector: 'app-root',
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
