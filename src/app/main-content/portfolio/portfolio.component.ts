import { Component } from '@angular/core';

interface PROJECT{
  name: string;
  img: string;
  skills: string;
  description: string;
  liveTestLink: string;
  gitHubLink: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  project: PROJECT []=[
    {
      name: "Join",
      img: "./assets/img/portfolio/join.png",
      skills: "Angular | TypeScript | HTML | CSS | Firebase",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      liveTestLink: "blabla",
      gitHubLink: "blubblub",
    },
    {
      name: "El Pollo Loco",
      img: "./assets/img/portfolio/pollo-loco.png",
      skills: "JavaScript | HTML | CSS",
      description: "A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and salsa bottles to fight against the chicken endboss..",
      liveTestLink: "blabla",
      gitHubLink: "blubblub",
    },
    {
      name: "Pokedex",
      img: "./assets/img/portfolio/pokedex.png",
      skills: "JavaScript | HTML | CSS | API",
      description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      liveTestLink: "blabla",
      gitHubLink: "blubblub",
    },
  ];
}
