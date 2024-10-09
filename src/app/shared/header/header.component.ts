import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  activeSection: string = ''; // Hier speichern wir die ID des aktiven Links
  menuOpen: boolean = false;   // Zustand für das Overlay-Menü

  setActiveSection(section: string) {
    this.activeSection = section; // Speichert den geklickten Link
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;  // Öffnet oder schließt das Menü
  }
}
