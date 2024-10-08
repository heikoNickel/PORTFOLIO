import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(4)]],
      privacy: [false, [Validators.requiredTrue]]
    });
  }

  onFocus(controlName: string) {
    this.contactForm.controls[controlName].markAsTouched();
  }

  onCheckboxChange() {
    this.contactForm.controls['privacy'].markAsTouched();
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);

      this.contactForm.reset({
        name: '',
        email: '',
        message: '',
        privacy: false
      });
    }
  }
}
