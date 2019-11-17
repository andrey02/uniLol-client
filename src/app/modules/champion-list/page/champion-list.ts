import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ChampionService } from '../../../service/champion.service';
import { Champion } from '../../../models/champion';

@Component({
    selector:'champion-list',
    templateUrl:'./champion-list.html',
    styleUrls:['./champion-list.scss']

})
export class ChampionListComponent implements OnInit 
{
  constructor(private router: Router, public championService:ChampionService) 
  { 

  }
  public listChampions:Array<Champion> = [];
  public championSelected:Champion = null;
  ngOnInit() 
  {
    this.loadListChampions();
  }

  public loadListChampions()
  {
    this.championService.getChampionList()
    .subscribe(resp=>
    {
      this.listChampions = resp;
    })
  }
  public selectChampion(champion:Champion)
  {
    this.championSelected = champion;
    // this.setClick()
  }
  public setClick()
  {
    let element = document.getElementById("divClick").click();
  }
}