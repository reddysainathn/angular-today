import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  title = "List of Courses Again!"
  imageURL = "http://lorempixel.com/400/200/";
  colSpan = 2;
  isActive = true;
  getActive($event) {
    // if(this.isActive==true){
    //   this.isActive=false
    // }else{
    //   this.isActive=true
    // }
    this.isActive = !this.isActive;
    console.log($event)
    $event.stopPropagation()
    console.log("Here in Button");
  }

  onDivClick() {
    console.log("Here in DIV");
  }

  onKeyUp(email) {
    // if ($event.keycode === 13) {
    //   console.log("Enter Pressed!")
    // }

    console.log(email)
  }
  constructor() { }

  ngOnInit() {
  }

}
