import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) {
    // Standard-Sprache setzen
    this.translate.setDefaultLang('en');
  }

  public switchLanguage(language: string): void{
    this.translate.use(language);
  }
}

