import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  routing: "slider" | "movie" | "renovations" = "slider";
  constructor() { }

  setRouting (routing: "slider" | "movie" | "renovations") {
    this.routing = routing;
  }
}
