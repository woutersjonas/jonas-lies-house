import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { SliderComponent } from './components/slider/slider.component';
import { RenovationsComponent } from './components/renovations/renovations.component';

const routes: Routes = [
  {path: "", component: SliderComponent},
  {path: "movie", component: MovieComponent},
  {path: "slider", component: SliderComponent},
  {path: "renovations", component: RenovationsComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
