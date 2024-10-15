import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslationService } from '../../translation.service';
import { TranslateService } from '@ngx-translate/core';
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

  private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  constructor(private fb: FormBuilder, private http: HttpClient, private ngxTranslate: TranslateService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
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
          // this.successMessage = 'Danke, Ihre Nachricht wurde erfolgreich gesendet!';
          this.successMessage = this.ngxTranslate.instant('contact_success');
          // this.successMessage = {{ 'contact_success' | translate}};
          this.contactForm.reset({
            name: '',
            email: '',
            message: '',
            privacy: false
          });
          this.hideMessagesAfterDelay();
        },
        error: (error) => {
          // this.errorMessage = 'Es gab ein Problem beim Senden des Formulars. Bitte versuchen Sie es erneut.';
          this.errorMessage = this.ngxTranslate.instant('contact_error');
          this.successMessage = '';
          // this.hideMessagesAfterDelay();
        }
      });
    }
  }
  hideMessagesAfterDelay() {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 10000); 
  }
}
  

