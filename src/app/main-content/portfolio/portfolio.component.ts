import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

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
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  translate = inject(TranslationService);

  project: PROJECT []=[
    {
      name: "Join",
      img: "./assets/img/portfolio/join.png",
      skills: "Angular | TypeScript | HTML | CSS | Firebase",
      description: 'PROJECTS.JOIN.DESCRIPTION',
      liveTestLink: "https://heiko-nickel.developerakademie.net/modul10/log_in/log_in.html",
      gitHubLink: "https://github.com/heikoNickel/Join",
    },
    {
      name: "El Pollo Loco",
      img: "./assets/img/portfolio/pollo-loco.png",
      skills: "JavaScript | HTML | CSS",
      description: 'PROJECTS.EL_POLLO_LOCO.DESCRIPTION',
      liveTestLink: "https://heiko-nickel.developerakademie.net/modul12/elPolloLoco/index.html",
      gitHubLink: "https://github.com/heikoNickel/elPolloLoco",
    },
    {
      name: "Pokedex",
      img: "./assets/img/portfolio/pokedex.png",
      skills: "JavaScript | HTML | CSS | API",
      description: 'PROJECTS.POKEDEX.DESCRIPTION',
      liveTestLink: "https://heiko-nickel.developerakademie.net/modul9/pokeDex/index.html",
      gitHubLink: "https://github.com/heikoNickel/Pokedex",
    },
  ];
}



