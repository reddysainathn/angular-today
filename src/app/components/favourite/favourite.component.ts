import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  //,inputs: ['isFavourite']
  // ,styles:[
  //   `
  //   .glyphicon {
  //     color: green;
  //   }

  //   .glyphicon-star {
  //     color: black;
  //   }
  //   `
  // ]
})
export class FavouriteComponent implements OnInit {
  @Input('isFavourite') isSelected = true;
  @Output('change') click = new EventEmitter();

  changeState() {
    console.log("Here");
    this.isSelected = !this.isSelected;
    this.click.emit(
      {
        newValue: this.isSelected
      }
    );
  }
  constructor() { }

  ngOnInit() {
  }

}
export interface FavouriteChangedEventArgs {
  newValue:boolean;
}