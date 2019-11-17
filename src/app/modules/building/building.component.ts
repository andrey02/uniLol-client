import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector:'building-page',
    templateUrl:'./building.component.html',
    styleUrls:['./building.component.scss']

})
export class BuildingComponent implements OnInit {
  constructor(public router: Router,
  ) { }
  ngOnInit() {
   
  }
 
}