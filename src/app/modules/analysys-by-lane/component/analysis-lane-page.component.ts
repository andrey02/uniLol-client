import { OnInit, Component, AfterViewInit } from '@angular/core';
import { AnalysisService } from '../../../service/analysis.service';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { RegionClass } from '../../../models/region';
import { Router } from '@angular/router';


@Component({
    selector:'analysis-lane',
    templateUrl:'./analysis-lane-page.component.html',
    styleUrls:['./analysis-lane-page.component.scss']

})
export class AnalysisLanePage implements OnInit 
{
    constructor(
        private analysisService : AnalysisService,
        private router :Router
    ){}
    public isLoading = false;
    public showUserInfo: any = {
        status:'initial',
        text:'Comece a busca pelas informações do jogador, e ele pode estar em processamento, e caso esteja esteja aguarde.'
    }
    public regionList: Array<RegionClass> = RegionClass.getListRegion();
    searchName:string;
    searchRegion:string;
    listInfoByLaneUser:any = {};
    public radarChartOptions: RadialChartOptions = {
        responsive: true,
        
    };
    public radarChartLabels: any = ['Ouro', 'Combate', "Visão"];

    public radarChartData: ChartDataSets[] = [
        { 
            data: [0, 0, 0],
            label: 'Teste 1 ',
            //backgroundColor: "white",
            // borderColor: "rgba(200,0,0,0.6)",
            // fill: true,
            // radius: 6,
            // pointRadius: 6,
            // pointBorderWidth: 3,
            // pointBackgroundColor: "orange",
            // pointBorderColor: "rgba(200,0,0,0.6)",
            // pointHoverRadius: 10,
        }
    ];
    public radarChartType: ChartType = 'radar';
    public userInfo :any ;
    ngOnInit(): void 
    {
        
    }
    public acharPartidaUsuario(name: string, region: string)
    {
        this.isLoading = true;
        this.analysisService.getUserInfo(this.searchName, this.searchRegion)
        .subscribe(resp=>
        {
            this.userInfo = resp;
            this.verifiyIfUserIsInProcess();
        })
    }
    public verifiyIfUserIsInProcess()
    {
        this.analysisService.getFromProcessQueue(this.userInfo.accountId)
        .subscribe(resp=>   
        {
            if(resp.status == true)
            {
                this.isLoading = false;
                this.showUserInfo.status = 'processing';
                this.showUserInfo.text = 'Aguarde usuário em processamento';
                window.alert(this.showUserInfo.text);
            }
            else
            {
                this.getAnalysisInfo();
            }
        })
    }
    public getAnalysisInfo()
    {
        this.analysisService.getInfoUserByLane(this.userInfo.accountId)
        .subscribe(resp=>{
            console.log(resp);
            this.isLoading = false;
            for(let i =0; i<resp.funcao.length; i++)
            {
                // registro agrupamento de campeão por partida de usuário e função
                let championGroup = {};
                for(let j=0; j<resp.funcao[i].partidasDoUsuario.length; j++)
                {
                    // cria o campeao caso não esteja mapeado
                    if(!championGroup[resp.funcao[i].partidasDoUsuario[j].campeao.campeaoIdApi])
                    {
                        championGroup[resp.funcao[i].partidasDoUsuario[j].campeao.campeaoIdApi] = {};
                    }
                    championGroup[resp.funcao[i].partidasDoUsuario[j].campeao.campeaoIdApi] = {
                        campeao:resp.funcao[i].partidasDoUsuario[j].campeao,
                        repetido: championGroup[resp.funcao[i].partidasDoUsuario[j].campeao.campeaoIdApi].repetido ? championGroup[resp.funcao[i].partidasDoUsuario[j].campeao.campeaoIdApi].repetido  + 1 : 1
                    }
                }
                var teste = Object.keys(championGroup).map(c=>{
                    return championGroup[c];
                });
                resp.funcao[i].partidasDoUsuario = teste.sort((a, b)=>a.repetido +  b.repetido);
            }
            this.listInfoByLaneUser = resp;
            
            this.radarChartData[0].data[0] = resp.combate.valor;
            this.radarChartData[0].label = this.userInfo.nome;
            this.radarChartData[0].data[1] = resp.ouro.valor;
            this.radarChartData[0].data[2] = resp.visao.valor;
            this.showUserInfo.status = 'processed';
            this.showUserInfo.text = 'O usuário está ativo na nossa base e contem dados'
        })
    }
    redirectNew(partida) 
    {
        this.router.navigate(['/analysis/' + this.userInfo.accountId] , { queryParamsHandling: 'merge', queryParams:{ accountId:this.userInfo.accountId, champion:partida.campeao.campeaoIdApi, region:this.searchRegion, name:this.searchName } })
    }
}