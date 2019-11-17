import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector:'card',
    templateUrl:'./card.component.html',
    styleUrls:['./card.component.scss']

})
export class CardComponent implements OnInit 
{
  constructor(private router: Router) { }

  ngOnInit() 
  {
  }
}