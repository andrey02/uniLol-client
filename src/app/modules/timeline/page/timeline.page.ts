import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { TimeLineService,CampeaoDTO,EventoDaPartida,Grafico,Participante } from '../../../service/timeline.service';
import * as d3 from "d3";
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';


@Component({
    selector:'timeline-page',
    templateUrl:'./timeline.page.html',
    styleUrls:['./timeline.page.scss']

})
export class TimelineComponent implements OnInit 
{
  // id da partida para trazer os dados da timeline   
  public matchId:string = null;
  public accountId:string = null;
  public eventosDaPartida:EventoDaPartida[] = [];
  public participantes:Participante[] = [];
  
  public model = {data:'level'};

  public formData = [
    { id: 1, name: '1', check:true },
    { id: 2, name: '2', check:false},
    { id: 3, name: '3', check:false },
    { id: 4, name: '4', check:false },
    { id: 5, name: '5', check:false },
    { id: 6, name: '6', check:false },
    { id: 7, name: '7', check:false },
    { id: 8, name: '8', check:false },
    { id: 9, name: '9', check:false },
    { id: 10, name: '10', check:false }
  ];
  

  public arrayPosicao;
  
  public times = {
    year: 31557600000,
    month: 2629746000,
    day: 86400000,
    hour: 3600000,
    minute: 60000,
    second: 1000
}

public chart: GoogleChartInterface;


  constructor(public router: Router,
              private activeRouter: ActivatedRoute,
              public timeLineService : TimeLineService
  ) { 
    
    this.activeRouter.params.subscribe( params => 
    {
        this.matchId = params['id'];
        this.activeRouter.queryParams.subscribe(queryParam=>{
         this.accountId = queryParam["accountId"];
          this.getTimelineInfo();

          this.pegarPosicaoPorPartidaEUsuario(+this.matchId, this.accountId);
          

        })
        
    });
  }
  
  ngOnInit() 
  {
   
  }

  public getTimelineInfo()
  {
    this.timeLineService.getEventosDaPartida(this.matchId)
    .subscribe(resp=>{
      console.log(resp);
      this.eventosDaPartida = resp.filter(evento=>evento.tipo != null && evento.tipo != "ITEM_DESTROYED");
    })

    this.timeLineService.getParticipantes(this.matchId)
    .subscribe(resp=>{
      console.log(resp);
      this.participantes = resp;

      this.gerarGrafico();
    })

  }


  public pegarPosicaoPorPartidaEUsuario(_matchId:number, _idUsuario:string)
  {
    console.log('Requisição chamada...')
    this.timeLineService.getPosition(_matchId,_idUsuario).subscribe(resp=>
    {
        console.log('Resposta' + JSON.stringify(resp));
        this.arrayPosicao = resp;
        this.setarMapa("#map",this.arrayPosicao);
    })

  }

  setarMapa(tagId: string, data: any) {
      
    let myContainer = <HTMLElement> document.querySelector("#map");
    myContainer.innerHTML = '';
    
    //ativar d3 mapa
      var  domain = {
          min: {x: -120, y: -120},
          max: {x: 14870, y: 14980}
      };
      var width = 300;
      var height = 300;
      var bg = "https://s3-us-west-1.amazonaws.com/riot-developer-portal/docs/map11.png";
      var xScale, yScale, svg;

    var color = d3.scaleLinear()
      .domain([0, 3])
      .range(["white", "steelblue"])
      .interpolate(d3.interpolateLab);

    xScale = d3.scaleLinear()
    .domain([domain.min.x, domain.max.x])
    .range([0, width]);

    yScale = d3.scaleLinear()
    .domain([domain.min.y, domain.max.y])
    .range([height, 0]);

    svg = d3.select(tagId).append("svg:svg")
      .attr("width", width)
      .attr("height", height);

    svg.append('image')
      .attr('xlink:href', bg)
      .attr('x', '0')
      .attr('y', '0')
      .attr('width', width)
      .attr('height', height);

    svg.append('svg:g').selectAll("circle")
      .data(data)
      .enter().append("svg:circle")
          .attr('cx', function(d) { return xScale(d[0]) })
          .attr('cy', function(d) { return yScale(d[1]) })
          .attr('r', 5)
          .attr('class', 'kills');
  }

  public  transform(miliseconds){
    let time_string: string = '';
    let plural: string = '';
    for(var key in this.times){
        if(Math.floor(miliseconds / this.times[key]) > 0){
            if(Math.floor(miliseconds / this.times[key]) >1 ){
                plural = 's';
            }
            else{
                plural = '';
            }

            time_string += Math.floor(miliseconds / this.times[key]).toString() + ' ' + key.toString() + plural + ' ';
            miliseconds = miliseconds - this.times[key] * Math.floor(miliseconds / this.times[key]);

        }
    }
    return time_string;
  }

  //montar gráfico com google charts
  gerarGrafico(){

    this.chart =null;
    let arrayData: number[] = [];
    let column:string[] = [];
    column.push('Tempo');

    this.formData.forEach(element => {
      if(element.check == true){
        arrayData.push(element.id)
        column.push(this.participantes[element.id-1].usuario.nome);
      }
        
    }); 

    let data : any[][] = [];
    data.push(column);

    this.timeLineService.getGraphData(this.matchId,this.model.data,arrayData).subscribe(resp =>{
      resp.forEach(element =>{
        data.push(element);
      })

      console.log(data);

      this.chart = {
        chartType: 'LineChart',
        dataTable: data,
        options: {'title': 'Dados da Timeline'},
      };

    })
  }
  itemInview = function(index, inview, inviewInfo, item) {
    // function hasChanged() {
    //   return inviewInfo.changed;
    // }

    // function isOutgoing() {
    //   return item.type === 'outgoing';
    // }

    // if (isOutgoing() && hasChanged() && inview) {
    //   this.total = this.total - item.amount;
    // }

    // this.schedule[index].inview = inview;
  };
  public getNomeParticipant(id:number)
  {
    id = id - 1;
    if(id >= 10 && id < 0 )
    {
      return '--';
    }
    return id != null && this.participantes[id] && this.participantes[id].usuario ?  this.participantes[id].usuario.nome : '';
  }
}

