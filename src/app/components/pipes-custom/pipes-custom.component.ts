import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-custom',
  templateUrl: './pipes-custom.component.html',
  styleUrls: ['./pipes-custom.component.css']
})
export class PipesCustomComponent implements OnInit {
  text=`
    Lorem Ipsum is simply dummy text of the pringting and typesetting.
  `
  constructor() { }

  ngOnInit() {
  }

}
