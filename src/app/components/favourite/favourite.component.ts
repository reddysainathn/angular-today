import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  isFavourite=true;
  changeState(){
    console.log("Here");
    (this.isFavourite) = !(this.isFavourite);
  }
  constructor() { }

  ngOnInit() {
  }

}
