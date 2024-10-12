import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public currentLanguage: string = 'en';

  constructor(private translate: TranslateService) {
    // Standard-Sprache setzen
    this.translate.setDefaultLang(this.currentLanguage);
  }

  // public switchLanguage(language: string): void{
  //   this.translate.use(language);
  // }

  public switchLanguage(language: string): void {
    this.currentLanguage = language; // Setze die aktuelle Sprache
    this.translate.use(language);
  }

  public getCurrentLanguage(): string {
    return this.currentLanguage; // Methode, um die aktuelle Sprache zu erhalten
  }
}

