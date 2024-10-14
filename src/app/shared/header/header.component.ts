import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, HostListener } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
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
  isManualScroll: boolean = false;

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
    this.isManualScroll = true;

    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      window.scrollTo({
        // top: sectionElement.offsetTop - 100,
        top: sectionElement.offsetTop - 0, 
        behavior: 'smooth'
      });

      setTimeout(() => {
        this.isManualScroll = false;
      }, 800); 
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.isManualScroll) {
      return; 
    }

    const sections = document.querySelectorAll<HTMLElement>('app-about-me, app-skills, app-portfolio, app-contact');
    const scrollPosition = window.scrollY + 0; 

 
    let foundSection = false;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.activeSection = section.getAttribute('id') || '';
        foundSection = true;
      }
    });

    if (!foundSection) {
      this.activeSection = '';
    }
  }

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








