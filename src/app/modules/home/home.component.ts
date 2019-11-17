import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RegionClass } from '../../models/region';

@Component({
    selector:'home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.scss']

})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }
  public regionList: Array<RegionClass> = RegionClass.getListRegion();
  ngOnInit() 
  {
  }
  public name :string = "";
  public region:string = "";
}