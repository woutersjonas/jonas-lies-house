import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly movieLink: string = 'assets/movie/movie.mp4';
}
