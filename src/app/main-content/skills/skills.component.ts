import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

interface ICON{
  icon: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  translate = inject(TranslationService);

  icons: ICON []=[
    {
      icon: "./assets/img/my-skills/html.png",
      description: "HTML"
    },
    {
      icon: "./assets/img/my-skills/css.png",
      description: "CSS"
    },
    {
      icon: "./assets/img/my-skills/java-script.png",
      description: "JavaScript"
    },
    {
      icon: "./assets/img/my-skills/type-script.png",
      description: "TypeScript"
    },
    {
      icon: "./assets/img/my-skills/angular.png",
      description: "Angular"
    },
    {
      icon: "./assets/img/my-skills/firebase.png",
      description: "Firebase"
    },
    {
      icon: "./assets/img/my-skills/git.png",
      description: "GIT"
    },
    {
      icon: "./assets/img/my-skills/rest-api.png",
      description: "Rest-API"
    },
    {
      icon: "./assets/img/my-skills/scrum.png",
      description: "Scrum"
    },
    {
      icon: "./assets/img/my-skills/material-design.png",
      description: "Material Design"
    },
    {
      icon: "./assets/img/my-skills/continually-learning.png",
      description: "Continually Leraning"
    },
  ];

  scrollToSection(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
