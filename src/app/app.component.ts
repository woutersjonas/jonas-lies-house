import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ImageService } from './services/image.service';
import { RoutingService } from './services/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isOnSliderRouting: boolean = false;
  constructor(
    private readonly imageService: ImageService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the route is "slider"
        if (this.router.url === '/slider') {
          this.isOnSliderRouting = true;
        } else {
          this.isOnSliderRouting = false;
        }
      }
    });
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if(this.isOnSliderRouting) {
      if(event.key === "ArrowRight") { this.imageService.nextImage() }
      if(event.key === "ArrowLeft") { this.imageService.prevImage() }
    }
  }
}
