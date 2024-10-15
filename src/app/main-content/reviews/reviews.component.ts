import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

interface REVIEWS{
  name: string;
  title: string;
  review: string;
  img: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  translate = inject(TranslationService);

  review: REVIEWS []=[
    {
      name: "Salmai S.",
      title: "REVIEWS.FIRST.TITLE",
      img: "./assets/img/reviews/man.png",
      review: "REVIEWS.FIRST.REVIEW",
    },
    {
      name: "Marvin D.",
      title: "REVIEWS.SECOND.TITLE",
      img: "./assets/img/reviews/user.png",
      review: "REVIEWS.SECOND.REVIEW",
    },
    {
      name: "Marc B.",
      title: "REVIEWS.THIRD.TITLE",
      img: "./assets/img/reviews/Marc.png",
      review: "REVIEWS.THIRD.REVIEW",
    },
    {
      name: "Philipp B.",
      title: "REVIEWS.FOURTH.TITLE",
      img: "./assets/img/reviews/user.png",
      review: "REVIEWS.FOURTH.REVIEW",
    },
    {
      name: "Fabion L.",
      title: "REVIEWS.FIFTH.TITLE",
      img: "./assets/img/reviews/Fabion.png",
      review: "REVIEWS.FIFTH.REVIEW",
    }
  ];

  currentIndex: number = 0;

  increaseIndex(){
    if(this.currentIndex < this.review.length - 1){
      this.currentIndex++;
    } else {
      this.currentIndex = 0
    } 
  }

  decreaseIndex(){
    if(this.currentIndex > 0){
      this.currentIndex --;
    } else {
      this.currentIndex = this.review.length - 1;
    } 
  }

  get currentReview() {
    return this.review[this.currentIndex];
  }


}
