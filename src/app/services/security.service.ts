import { Injectable } from '@angular/core';
import { RoutingService } from './routing.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  password: string = "wachtwoord";
  isOpen: boolean = false;
  currentNumber: number = 0;
  askPassword: boolean = false;

  constructor(private readonly routingService: RoutingService) { }

  toggleOpen(password?: string) {
    if(this.isOpen) this.reset();
    else if (password && this.password === password) this.open();
  }
  
  reset() {
    this.isOpen = false;
    this.currentNumber = 0;
    this.askPassword = false;
    if(this.routingService.routing === "more_info") this.routingService.routing = "slider";
  }

  clickSecurityButton(number: number) {
    if(number === this.currentNumber + 1) this.currentNumber = number;
    else if(number === this.currentNumber) return;
    else this.reset();

    if(this.currentNumber === 4) this.askPassword = true;
  }

  open() {
    this.isOpen = true;
    this.currentNumber = 0;
    this.askPassword = false;
  }
}
