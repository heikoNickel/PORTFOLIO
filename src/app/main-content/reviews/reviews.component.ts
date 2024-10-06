import { Component } from '@angular/core';

interface REVIEWS{
  name: string;
  title: string;
  review: string;
  img: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  review: REVIEWS []=[
    {
      name: "V.Schuster",
      title: "Team Partner",
      img: "./assets/img/reviews/man.png",
      review: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
    },
    {
      name: "E.Eichinger",
      title: "Team Partner",
      img: "./assets/img/reviews/user.png",
      review: "Michi was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.",
    },
    {
      name: "I.Nuber",
      title: "Frontend Engineer",
      img: "./assets/img/reviews/woman.png",
      review: "MIt was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well..",
    },
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
