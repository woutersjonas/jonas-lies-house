import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortdatePipe } from './pipes/shortdate.pipe';
import { SliderComponent } from './components/slider/slider.component';
import { MovieComponent } from './components/movie/movie.component';
import { HomeComponent } from './components/home/home.component';
import { RenovationComponent } from './components/renovations/renovation/renovation.component';
import { RenovationsComponent } from './components/renovations/renovations.component';
import { WIPComponent } from './components/wip/wip.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortdatePipe,
    SliderComponent,
    MovieComponent,
    HomeComponent,
    RenovationComponent,
    RenovationsComponent,
    WIPComponent,
    NavbarComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
