import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable }     from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnalysisService
{
    public headers = new Headers();

    constructor(public http:HttpClient
    ){}

    public getInfoUserByLane(_accountId:string) :Observable<any>
    {
        return this.http.get<any>( 'https://pgppain.uk/unilol/api/status/' + _accountId);
    }
    // verifica se o usuário está na process queue
    public getFromProcessQueue(_accountid:string) : Observable<any>
    {
        return this.http.get<StatusFromAPi>( 'https://pgppain.uk/unilol/api/processo/usuario/' + _accountid);
    }
    // busca as informações do usuário
    public getUserInfo(_summonerName:string, region:string)
    {
        return this.http.get<UsarioRiot>('https://pgppain.uk/unilol/api/usuario/' + _summonerName +'/'+ region);
    }
    public getAllUsers()
    {
        return this.http.get<UsarioRiot[]>('https://pgppain.uk/unilol/api/usuario/list');
    }
    public getStatusInfo(_accountId:string, _campeaoIdApi:string)
    {
        return this.http.get<any>('https://pgppain.uk/unilol/api/status/' + _accountId +'/'+ _campeaoIdApi);
    }

    public getChampionInfo(campeaoIdApi:string) :Observable<any>{
        return this.http.get<Campeao>('https://pgppain.uk/unilol/api/campeao/'+campeaoIdApi);
    }
}
class StatusFromAPi
{
    status:boolean;
}
class UsarioRiot
{
    accountId: string;
    iconUrl: string;
    nome: string;
}

export class Status {
    public combate:Array<{nota:string,valor:number, participacaoAbates:number,danoCompartilhado:number,danoPorMorte:number,pontuacaoDeUtilidade:number }>;
    public visao:Array<{nota:string,valor:number, controleDeObjetivo:number,conversaoDeAbates:number,kdaAos15min:number,relacaoDeWard:number }>;
    public ouro:Array<{nota:string,valor:number, controleDeObjetivo:number,conversaoDeAbates:number,kdaAos15min:number,relacaoDeWard:number }>;
}

export class Campeao
{
    caminhoImagem: string;
    campeaoIdApi: string;
    nome: string;
}