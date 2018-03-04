import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'twitter-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  //My Solution
  // @Input() isActive = false;
  // @Input() likeCount;
  // changeState() {
  //   this.isActive = !this.isActive;
  //   this.likeCount = this.likeCount ? 0 : 1;
  // }

  //Instructor Solution
  @Input('likeCount') likeCount: number;
  @Input('isActive') isActive: boolean;
  onClick() {
    this.likeCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
