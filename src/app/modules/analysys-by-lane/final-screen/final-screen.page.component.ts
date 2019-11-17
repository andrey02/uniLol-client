import { OnInit, Component, AfterViewInit } from '@angular/core';
import { AnalysisService, Campeao } from '../../../service/analysis.service';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { RegionClass } from '../../../models/region';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector:'final-screen',
    templateUrl:'./final-screen.page.component.html',
    styleUrls:['./final-screen.page.component.scss']

})
export class FinalScreenPage implements OnInit 
{
    params :any = {};
    infoStatus :any;
    userInfo:any;
    championInf:Campeao;
    challenger:any;
    challengerList = [];
    challengerInfo:any;

    
    public radarChartOptions: RadialChartOptions = {
        responsive: true,
        
        scale: {
            ticks: {
                beginAtZero: true,
                stepSize: 1,
                min: 0,
                max: 10,
            },
            pointLabels: {
                fontSize: 18
            }
        },
        // legend: {
        //     position: 'left'
        // }
    };
    public radarChartLabelsCombate: any = ['Relação de Ama', 'Participação em abates','Dano compartilhado', 'valor'];
    public radarChartDataCombate: ChartDataSets[] = [
        { 
            data: [0, 0, 0,0],
            label: 'Combate',
            // backgroundColor: "white",
            // borderColor: "rgba(200,0,0,0.6)",
            // fill: true,
            // radius: 6,
            // pointRadius: 6,
            // pointBorderWidth: 3,
            // pointBackgroundColor: "orange",
            // pointBorderColor: "rgba(200,0,0,0.6)",
            // pointHoverRadius: 10,
        },
        {
            data: [0, 0, 0,0],
            label: 'Combate'
        }
    ];

    public radarChartLabelsOuro: any = ['Dano Por Ouro','CsPorMin', 'valor','VantagemAos15'];
    public radarChartDataOuro: ChartDataSets[] = [
        { 
            data: [ 0, 0, 0,0],
            label: 'Ouro'
            // backgroundColor: "white",
            // borderColor: "rgba(200,0,0,0.6)",
            // fill: true,
            // radius: 6,
            // pointRadius: 6,
            // pointBorderWidth: 3,
            // pointBackgroundColor: "orange",
            // pointBorderColor: "rgba(200,0,0,0.6)",
            // pointHoverRadius: 10,
        },
        {
            data: [0, 0, 0, 0],
            label: 'Ouro'
        }
    ];

    public radarChartLabelsVisao: any = ['Conversão de abates','AMA aos 15 minutos','Relação de ward','Controle de Objetivo',''];
    public radarChartDataVisao: ChartDataSets[] = [
        { 
            data: [0, 0, 0, 0],
            label: 'Visão'
            // backgroundColor: "white",
            // borderColor: "rgba(200,0,0,0.6)",
            // fill: true,
            // radius: 6,
            // pointRadius: 6,
            // pointBorderWidth: 3,
            // pointBackgroundColor: "orange",
            // pointBorderColor: "rgba(200,0,0,0.6)",
            // pointHoverRadius: 10,
        },
        {
            data: [0, 0, 0, 0],
            label: 'Visão'
        }
    ];
    public radarChartType: ChartType = 'radar';


    constructor(
        private analysisService : AnalysisService,
        private router :Router,
        private activeRouter:ActivatedRoute
    ){
        this.activeRouter.queryParams.subscribe(resp=>{
            this.params["accountId"] = resp["accountId"]
            this.params["championId"] = resp["champion"];
            this.params["region"] = resp["region"];
            this.params["summonerName"] = resp["name"];
            this.getChampionInf();
            this.getStatusInfo();
            this.getUserInf();
            this.getChallengerList();
            
        })
    }
    ngOnInit(): void 
    {
        
    }

    public getChampionInf() 
    {
        this.analysisService.getChampionInfo(this.params.championId)
        .subscribe(resp=>
        {
            this.championInf = resp;
            console.log(this.championInf)
        })
    }
    public getUserInf()
    {
        this.analysisService.getUserInfo(this.params.summonerName, this.params.region)
        .subscribe(resp=>
        {
            this.userInfo = resp;
        })
    }
    public getStatusInfo()
    {
        this.analysisService.getStatusInfo(this.params.accountId, this.params.championId)
        .subscribe(resp=>
        {
            this.infoStatus = resp;
        
            
            //combate
            
            this.radarChartDataCombate[0].data[0] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataCombate[0].data[1] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataCombate[0].data[2] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataCombate[0].data[3] = Math.floor(Math.random() * 10)+1;
            //visao
            
            this.radarChartDataVisao[0].data[0] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataVisao[0].data[1] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataVisao[0].data[2] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataVisao[0].data[3] = Math.floor(Math.random() * 10)+1;

            //ouro
            
            this.radarChartDataOuro[0].data[0] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataOuro[0].data[1] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataOuro[0].data[2] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataOuro[0].data[3] = Math.floor(Math.random() * 10)+1;
        })
    }
    public getChallengerList()
    {
        this.analysisService.getAllUsers()
        .subscribe(resp=>{
            this.challengerList = resp;
            console.log(resp);
        })
    }
    public getChallengerInfo()
    {
        let c = this.challengerList.find(p=> p.accountId == this.challenger);
        this.analysisService.getStatusInfo(c.accountId, this.params.championId)
        .subscribe(resp=>
        {
            this.challengerInfo = resp;
            console.log(resp)
            //combate
            
            this.radarChartDataCombate[1].data[0] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataCombate[1].data[1] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataCombate[1].data[2] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataCombate[1].data[3] = Math.floor(Math.random() * 10)+1;
            //visao
            
            this.radarChartDataVisao[1].data[0] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataVisao[1].data[1] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataVisao[1].data[2] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataVisao[1].data[3] = Math.floor(Math.random() * 10)+1;

            //ouro
            
            this.radarChartDataOuro[1].data[0] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataOuro[1].data[1] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataOuro[1].data[2] = Math.floor(Math.random() * 10)+1;
            this.radarChartDataOuro[1].data[3] = Math.floor(Math.random() * 10)+1;
        })
    }
}