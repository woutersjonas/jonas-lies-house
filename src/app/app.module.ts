import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortdatePipe } from './pipes/shortdate.pipe';
import { SliderComponent } from './components/slider/slider.component';
import { MovieComponent } from './components/movie/movie.component';
import { HomeComponent } from './components/home/home.component';
import { DocumentComponent } from './components/document/document.component';
import { RenovationsComponent } from './components/more-info/renovations/renovations.component';
import { WIPComponent } from './components/wip/wip.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TitleComponent } from './components/title/title.component';
import { SafePipe } from './pipes/safe.pipe';
import { SecurityComponent } from './components/security/security.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { LeningenEnVerzekeringenComponent } from './components/more-info/leningen-en-verzekeringen/leningen-en-verzekeringen.component';
import { DescriptionComponent } from './components/more-info/description/description.component';
import { DocumentenMakelaarComponent } from './components/more-info/documenten-makelaar/documenten-makelaar.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortdatePipe,
    SliderComponent,
    MovieComponent,
    HomeComponent,
    DocumentComponent,
    RenovationsComponent,
    WIPComponent,
    NavbarComponent,
    TitleComponent,
    SafePipe,
    SecurityComponent,
    MoreInfoComponent,
    LeningenEnVerzekeringenComponent,
    DescriptionComponent,
    DocumentenMakelaarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
