import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { routes } from '../../app.routes';
import { filter } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

  translate = inject(TranslationService);

  activeSection: string = ''; 
  menuOpen: boolean = false;  

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.router.url === '/') {
          this.activeSection = ''; 
        }
      });
  }

  setActiveSection(section: string) {
    this.activeSection = section; 
  }

  // toggleMenu() {
  //   this.menuOpen = !this.menuOpen;
  // }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    const burgerMenu = document.querySelector('.burger-menu');
  
    if (this.menuOpen) {
      burgerMenu?.classList.add('hidden');
    } else {
      burgerMenu?.classList.remove('hidden');
    }
  }
}
