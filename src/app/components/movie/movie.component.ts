import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  constructor(public readonly movieService: MovieService) {}
}
