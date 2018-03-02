import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-usage',
  templateUrl: './pipes-usage.component.html',
  styleUrls: ['./pipes-usage.component.css']
})
export class PipesUsageComponent implements OnInit {
  course = {
    title: "THe Complete COurse",
    rating: 3.45565,
    students: 45677,
    price: 45.67444,
    releaseDate: new Date(2018, 5, 1)
  }
  constructor() { }

  ngOnInit() {
  }

}
