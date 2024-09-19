import { Injectable } from '@angular/core';
import { Image } from '../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  images: Image[] = [
    { link: 'assets/slider/1.jpg', shortDescription: "Voorgevel", description: ["De voorgevel van het huis bevindt zich in de Scheperstraat in beerse met huisnummer 35. Dit is een doodlopende straat tussen brug 4 en brug 5 van kanaal dessel-schoten", "Het is een half-open bebouwing in een rij van gelijkaardige woningen.", "Vooraan vinden we een grote oprit met plaats voor 3 tot 5 autos."]},
    { link: 'assets/slider/2.jpg', shortDescription: "Voorgevel schuin", description: []},
    { link: 'assets/slider/3.jpg', shortDescription: "Inkomhal", description: ["Als we door de voordeur naar binnen gaan komen we uit in de inkomhal. Hier vinden we een opbergkast, kapstok, deur naar de living, deur naar een wc'tje en de trap naar boven."]},
    { link: 'assets/slider/4.jpg', shortDescription: "Zetelhoek", description: ["Wanneer we door de deur van de inkomhal naar de leefruimte gaan, komen we uit in een zeer mooie ruimte waar veel ruimte is voor een zetelhoek.", "De volledige ruimte van de living is bij benadering 4m - 15m"]},
    { link: 'assets/slider/5.jpg', shortDescription: "Zetelhoek met pelletkachel", description: ["In deze zetelhoek is er ook een werkende pelletkachel. Deze zorgt ten alle tijden voor een gezellige warmte in huis."]},
    { link: 'assets/slider/6.jpg', shortDescription: "Eetkamer", description: ["Naast de riante zetelhoek is er ruimte voor een eettafel."]},
    { link: 'assets/slider/7.jpg', shortDescription: "Eetkamer  ", description: []},
    { link: 'assets/slider/8.jpg', shortDescription: "Open ruimte vanuit eetkamer", description: ["Achter de eettafel bevindt zich nog een openruimte die momenteel dienst doet als bureau/open ruimte."]},
    { link: 'assets/slider/9.jpg', shortDescription: "Keuken", description: ["De keuken is vernieuwd in 2017 en dankzij het 'schier'eiland is er zeker voldoende ruimte."]},

    { link: 'assets/slider/10.jpg', shortDescription: "Keuken close-up", description: []},
    { link: 'assets/slider/11.jpg', shortDescription: "Open ruimte vanuit keuken", description: []},
    { link: 'assets/slider/12.jpg', shortDescription: "Wasplaats/opbergruimte", description: ["Naast de keuken bevindt zich een grote opbergplaats waar voldoende ruimte is voor een wasmachine, droogkast, vriezer en meer dan genoeg plaats om voorraden in op te slagen.", "Dit kan zeker nuttig zijn omdat er geen kelder aanwezig is (wel een kruipkelder)"]},
    { link: 'assets/slider/13.jpg', shortDescription: "Nachthal boven", description: ["Als we in de inkomhal de trap naar boven nemen, komen we uit op de nachthal van de 1ste verdieping. Hier hebben we toegang tot 3 slaapkamers, 1 badkamer, 1 wc en de trap naar de zolderverdieping."]},
    { link: 'assets/slider/14.jpg', shortDescription: "Slaapkamer 1 (met dressing)", description: ["De eerste slaapkamer (master bedroom) is een zeer ruime slaapkamer met een grote dressing."]},
    { link: 'assets/slider/15.jpg', shortDescription: "Slaapkamer 1 --> Dressing", description: []},
    { link: 'assets/slider/16.jpg', shortDescription: "Slaapkamer 1", description: []},
    { link: 'assets/slider/17.jpg', shortDescription: "Badkamer", description: ["De badkamer is vrij klein, maar bevat alles wat we nodig hebben. Een bad, douche en lavabo.", "Deze badkamer is wel een beetje outdated en kan een opfrissing gebruiken."]},
    { link: 'assets/slider/18.jpg', shortDescription: "Badkamer", description: []},
    { link: 'assets/slider/19.jpg', shortDescription: "Slaapkamer 2", description: ["De 2de slaapkamer is wederom een grote slaapkamer met veel kastruimte, veel lichtinval, plaats voor een bureau en groot bed."]},

    { link: 'assets/slider/20.jpg', shortDescription: "Slaapkamer 2", description: []},
    { link: 'assets/slider/21.jpg', shortDescription: "Slaapkamer 3", description: ["De 4de slaapkamer is een eerder kleine slaapkamer. Deze slaapkamer is met 2m40 op 4m40 is deze slaapkamer groot genoeg, maar niet super ruim."]},
    { link: 'assets/slider/22.jpg', shortDescription: "Slaapkamer 3", description: []},
    { link: 'assets/slider/23.jpg', shortDescription: "Nachthal zolder", description: ["Als we van het 1ste verdieping naar de zolderverdieping gaan komen we hier wederom uit in een kleine nachthal. Deze geeft toegang tot enerzijds een technische ruimte met boiler enzo. Anderzijds geeft deze toegang tot een 4de slaapkamer."]},
    { link: 'assets/slider/24.jpg', shortDescription: "Slaapkamer 4", description: ["De 4de slaapkamer is een slaapkamer die dankzij de ingebouwde kasten in het schuine dak, wederom plaats genoeg heeft voor een groot bed + bureau.", "Deze kamer is ideaal om als een tienerkamer te gebruiken."]},
    { link: 'assets/slider/25.jpg', shortDescription: "Koten naast huis", description: ["Als we langs de voorkant van het huis aan de linkerkant naast het huis gaan komen we langs de schuifpoort de tuin binnen.", "Hier vinden we eerst een aantal koten waar plaats is voor fietsen, vuilbakken, buitenijskast, BBQ..."]},
    { link: 'assets/slider/26.jpg', shortDescription: "Terras naast huis", description: ["Vlak achter de koten vinden we nog een gezellige terras naast het huis."]},
    { link: 'assets/slider/27.jpg', shortDescription: "Tuin met terras", description: ["In de ruime tuin vinden we nog een 2de terras en achteraan nog een ruim bijgebouwd tuinhuis."]},
    { link: 'assets/slider/28.jpg', shortDescription: "Dubbele garage", description: ["Achteraan de woonst bevindt zich een dubbele garage en werkplaats. Deze garage is bereikbaar via een andere doodlopende straat."]},
    { link: 'assets/slider/29.jpg', shortDescription: "Tuinhuis", description: ["Tussen de garage en de tuin bevindt zich, over de gehele breedte van het perceel, nog een groot tuinhuis."]},
    
    { link: 'assets/slider/30.jpg', shortDescription: "Dubbele garage op doodlopende straat", description: []},
    { link: 'assets/slider/31.jpg', shortDescription: "Tuin", description: []},
    { link: 'assets/slider/32.jpg', shortDescription: "Tuin met achteraanzicht woning", description: []},
    { link: 'assets/slider/33.jpg', shortDescription: "Drone achterkant", description: []},
    { link: 'assets/slider/34.jpg', shortDescription: "Drone voorkant", description:[]}
  ]
  currentImage: number = 0;
  constructor() { }

  getImages(): Image[] {
    return this.images;
  }

  nextImage() {
    this.currentImage += 1;
    if(this.images.length - 1 < this.currentImage) this.currentImage = 0;
  }

  prevImage() {
    this.currentImage -= 1;
    if(this.currentImage < 0) this.currentImage = this.images.length - 1;
  }
}
