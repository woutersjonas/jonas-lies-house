import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullscreenService {
  isFullscreen: boolean = false;
  constructor() { }

  toggleFullscreen(): void {
    if (this.isFullscreen) {
      this.closeFullscreen();
    } else {
      this.openFullscreen();
    }
  }

  openFullscreen(): void {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    this.isFullscreen = true;
  }

  closeFullscreen(): void {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    this.isFullscreen = false;
  }
  isFullscreenEnabled(): boolean {
    return document.fullscreenEnabled;
  }
}
