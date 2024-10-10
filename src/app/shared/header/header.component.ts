import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { routes } from '../../app.routes';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

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

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
