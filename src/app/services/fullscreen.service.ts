import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullscreenService {
  isFullscreen: boolean = true;
  constructor() { }
}
