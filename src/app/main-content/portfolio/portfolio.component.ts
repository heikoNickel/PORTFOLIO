import { Component } from '@angular/core';

interface PROJECT{
  name: string;
  img: string;
  skills: string[];
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

}
