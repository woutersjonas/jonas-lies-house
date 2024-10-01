import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  password: string = "wachtwoord";
  isOpen: boolean = true;
  currentNumber: number = 0;
  askPassword: boolean = false;

  constructor() { }

  toggleOpen(password?: string) {
    if(this.isOpen) this.reset();
    else if (password && this.password === password) this.open();
  }
  
  reset() {
    this.isOpen = false;
    this.currentNumber = 0;
    this.askPassword = false;
  }

  clickSecurityButton(number: number) {
    if(number === this.currentNumber + 1) this.currentNumber = number;
    else this.reset();

    if(this.currentNumber === 4) this.askPassword = true;
  }

  open() {
    this.isOpen = true;
    this.currentNumber = 0;
    this.askPassword = false;
  }
}
