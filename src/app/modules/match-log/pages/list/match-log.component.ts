import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatchLogService } from '../../match-log.service';
// import * as d3 from "d3";
import { RegionClass } from "../../../../models/region";
import { fromEvent, Observable, Observer } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll, distinctUntilChanged } from 'rxjs/operators';
import { ChampionService } from '../../../../service/champion.service';
import { Partida } from '../../../../models/partida';

@Component({
    selector:'match-log-list',
    templateUrl:'./match-log.component.html',
    styleUrls:['./match-log.component.scss']

})
export class MatchLogListComponent implements OnInit 
{
  constructor(public router: Router,
    public matchLogService : MatchLogService,
    private route: ActivatedRoute,
    public championService : ChampionService
  ) { }
  public matchLog:Partida;
  public searchName:string = "";
  public searchRegion:string="";
  public arrayPosicao;
  public regionList: Array<RegionClass> = RegionClass.getListRegion();
  public isLoading:boolean = false;
  public showResults:boolean = false;
  public showDetail:boolean = false;
  public mostrarModal:boolean = false;
  public modalInfo :any = {};
  @ViewChild('summonerName') emailRef: ElementRef;
  ngOnInit() 
  {
    this.route.queryParams
    .subscribe(params => 
    {
      
      this.searchName = params['summoner'] || null;
      this.searchRegion = params['region'] || null;

      if(this.searchName!= null && this.searchRegion)
      {
        this.acharPartidaUsuario( params['summoner'],params['region'] );
      }
    });
   
    fromEvent(this.emailRef.nativeElement, 'keyup')
    .pipe(
      map((evt: any) => evt.target.value),
      filter(res => res.length > 2),
      debounceTime(1000),
      distinctUntilChanged(),
    )
    .subscribe((text: string) => {
      this.router.navigate(['/match'], { queryParams: { summoner: text, region: this.searchRegion || '' } });
    })
  }
  public insertParamsRouter()
  {
    this.router.navigate(['/match'], { queryParams: { summoner: this.searchName, region:this.searchRegion } });
  }
  
  public acharPartidaUsuario(_nome:string, _region:string)
  {
    this.isLoading = true;
    this.showResults = false;
    this.insertParamsRouter()
    if(_region && _nome)
    {
      
      this.matchLogService.getLogList(_nome, _region).subscribe( async resp=>
      {
          this.matchLog = resp;
          this.matchLog.partidas =  resp.partidas.map((partida, index)=>{
              partida.runas = partida.runas.filter( (runa, index)=>{
              return index == 0 || index == 4 || index == 5
            });
            return partida;
          });
          this.isLoading = false;
          this.showResults = true;
      }, err=>
      {
        window.alert('Um erro ocorreu ' + JSON.stringify(err)); 
        this.isLoading = false;
      });
    }
    else
    { 
      this.isLoading = false;
      window.alert('Selecione a região');
    }
  }
  public showMatch(_index:number, _matchId:number)
  {
    this.showDetail = !this.showDetail;
    this.matchLog.partidas[_index].showDetail = this.showDetail;
    if(this.showDetail)
    {
      this.matchLog.partidas[_index].loadingDetail = true;
      this.showPartidaDetail(_matchId, _index);
    }
  }

  public showPartidaDetail(_matchId:number, _index:number)
  {
    try
    {
      this.matchLogService.getMatchDetail(_matchId)
      .subscribe(resp=>
      {
        console.log(resp);
        this.matchLog.partidas[_index].detail =  resp;
        this.matchLog.partidas[_index].loadingDetail = false;
      })
    }
    catch(err)
    {
      console.log(JSON.stringify (err) );
    }

  }
  public updateInfo()
  {
    this.matchLogService.updateInfo(this.searchName, this.searchRegion).subscribe( async resp=>
    {
      this.isLoading = false;
    }, err=>
    {
      window.alert('Um erro ocorreu ' + JSON.stringify(err)); 
      this.isLoading = false;
    });
  }
  public async abrirModalRuna(_title, _name, _caminhoImagem, _id)
  {
    this.modalInfo = {
      title:_title,
      name:_name,
      img:_caminhoImagem
    }
    let runInfo = await this.matchLogService.getRunaInfo(_id).toPromise();
    this.modalInfo.info = runInfo.runa.shortDescription;
    this.modalInfo.name = runInfo.runa.name;
    this.mostrarModal = true;
  }
  public async abrirModalItem(_title, _name, _caminhoImagem, _id)
  {
    this.modalInfo = {
      title:_title,
      name:_name,
      img:_caminhoImagem
    }
    let runInfo = await this.matchLogService.getItemInfo(_id).toPromise();
    this.modalInfo.info = runInfo.item.plaintext;
    this.modalInfo.name = runInfo.item.name;
    this.mostrarModal = true;
  }
  public async abrirModalSpell(_title, _name, _caminhoImagem, _id)
  {
    this.modalInfo = {
      title:_title,
      name:_name,
      img:_caminhoImagem
    }
    let runInfo = await this.matchLogService.getSpellInfo(_id).toPromise();
    this.modalInfo.info = runInfo.spell.description;
    this.modalInfo.name = runInfo.spell.name;
    this.mostrarModal = true;
  }
  public closeModal()
  {
    this.mostrarModal = false;
  }
}