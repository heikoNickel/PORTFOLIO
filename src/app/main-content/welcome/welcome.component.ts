import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})  
export class WelcomeComponent {

  translate = inject(TranslationService);

  scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
