import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  routing: "slider" | "movie" | "more_info" = "slider";
  constructor() { }

  setRouting (routing: "slider" | "movie" | "more_info") {
    this.routing = routing;
  }
}
