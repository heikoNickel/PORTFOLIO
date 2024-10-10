import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  constructor(public router: Router) {}
  activeSection: string = ''; // Hier speichern wir die ID des aktiven Links
  menuOpen: boolean = false;   // Zustand für das Overlay-Menü

  setActiveSection(section: string) {
    this.activeSection = section; // Speichert den geklickten Link
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;  // Öffnet oder schließt das Menü
  }
}
