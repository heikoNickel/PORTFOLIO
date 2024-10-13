import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, TranslateModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {

  translate = inject(TranslationService);

  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
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
      const formData = this.contactForm.value;
      const formspreeUrl = 'https://formspree.io/f/xrbggpkd'; 
      console.log('Form Submitted', this.contactForm.value);

      this.http.post(formspreeUrl, {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }).subscribe({
        next: (response) => {
          this.successMessage = 'Danke, Ihre Nachricht wurde erfolgreich gesendet!';
          this.contactForm.reset({
            name: '',
            email: '',
            message: '',
            privacy: false
          });
          this.hideMessagesAfterDelay();
        },
        error: (error) => {
          this.errorMessage = 'Es gab ein Problem beim Senden des Formulars. Bitte versuchen Sie es erneut.';
          this.successMessage = '';
          this.hideMessagesAfterDelay();
        }
      });
    }
  }
  hideMessagesAfterDelay() {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 5000); 
  }
}
  

