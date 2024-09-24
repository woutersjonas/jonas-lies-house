import { Component } from '@angular/core';
import { SecurityService } from '../../services/security.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss'
})
export class SecurityComponent {
  myForm: FormGroup;


  constructor(public readonly securityService: SecurityService, private fb: FormBuilder) {
    // Initialize the form with form controls and validations
    this.myForm = this.fb.group({
      password: ['', Validators.required],
    });
  }
  onSubmit(){
    if (this.myForm.valid) {
      console.log('Form Submitted', this.myForm.value);
      this.securityService.toggleOpen(this.myForm.value.password);
    } else {
      console.log('Form is invalid');
    }
  }
}
