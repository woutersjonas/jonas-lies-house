import { Injectable } from '@angular/core';
import { Image } from '../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  images: Image[] = [
    { link: 'assets/slider/1.jpg', shortDescription: "Short description for foto 1", description: ""},
    { link: 'assets/slider/2.jpg', shortDescription: "Short description for foto 2", description: ""},
    { link: 'assets/slider/3.jpg', shortDescription: "Short description for foto 3", description: ""},
    { link: 'assets/slider/4.jpg', shortDescription: "Short description for foto 4", description: ""},
    { link: 'assets/slider/5.jpg', shortDescription: "Short description for foto 5", description: ""},
    { link: 'assets/slider/6.jpg', shortDescription: "Short description for foto 6", description: ""},
    { link: 'assets/slider/7.jpg', shortDescription: "Short description for foto 7", description: ""},
    { link: 'assets/slider/8.jpg', shortDescription: "Short description for foto 8", description: ""},
    { link: 'assets/slider/9.jpg', shortDescription: "Short description for foto 9", description: ""},

    { link: 'assets/slider/10.jpg', shortDescription: "Short description for foto 10", description: ""},
    { link: 'assets/slider/11.jpg', shortDescription: "Short description for foto 11", description: ""},
    { link: 'assets/slider/12.jpg', shortDescription: "Short description for foto 12", description: ""},
    { link: 'assets/slider/13.jpg', shortDescription: "Short description for foto 13", description: ""},
    { link: 'assets/slider/14.jpg', shortDescription: "Short description for foto 14", description: ""},
    { link: 'assets/slider/15.jpg', shortDescription: "Short description for foto 15", description: ""},
    { link: 'assets/slider/16.jpg', shortDescription: "Short description for foto 16", description: ""},
    { link: 'assets/slider/17.jpg', shortDescription: "Short description for foto 17", description: ""},
    { link: 'assets/slider/18.jpg', shortDescription: "Short description for foto 18", description: ""},
    { link: 'assets/slider/19.jpg', shortDescription: "Short description for foto 19", description: ""},

    { link: 'assets/slider/20.jpg', shortDescription: "Short description for foto 20", description: ""},
    { link: 'assets/slider/21.jpg', shortDescription: "Short description for foto 21", description: ""},
    { link: 'assets/slider/22.jpg', shortDescription: "Short description for foto 22", description: ""},
    { link: 'assets/slider/23.jpg', shortDescription: "Short description for foto 23", description: ""},
    { link: 'assets/slider/24.jpg', shortDescription: "Short description for foto 24", description: ""},
    { link: 'assets/slider/25.jpg', shortDescription: "Short description for foto 25", description: ""},
    { link: 'assets/slider/26.jpg', shortDescription: "Short description for foto 26", description: ""},
    { link: 'assets/slider/27.jpg', shortDescription: "Short description for foto 27", description: ""},
    { link: 'assets/slider/28.jpg', shortDescription: "Short description for foto 28", description: ""},
    { link: 'assets/slider/29.jpg', shortDescription: "Short description for foto 29", description: ""},
    
    { link: 'assets/slider/30.jpg', shortDescription: "Short description for foto 30", description: ""},
    { link: 'assets/slider/31.jpg', shortDescription: "Short description for foto 31", description: ""},
    { link: 'assets/slider/32.jpg', shortDescription: "Short description for foto 32", description: ""},
    { link: 'assets/slider/33.jpg', shortDescription: "Short description for foto 33", description: ""},
    { link: 'assets/slider/34.jpg', shortDescription: "Short description for foto 34", description: ""}
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
