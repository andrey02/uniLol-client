import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable }     from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Partida } from '../../models/partida';

@Injectable()
export class MatchLogService
{
    public match
    public headers = new Headers();

    constructor(public http:HttpClient
    ){

    }

    public getLogList(_name, _region) : Observable<Partida>
    {
        return this.http.get<Partida>( 'https://pgppain.uk/unilol/api/match/' + _name + '/' + _region);
    }
    public getMatchDetail(_matchId)
    {
        return this.http.get<Partida>( 'https://pgppain.uk/unilol/api/detalhes/' + _matchId);
    }

    public getPosition(_matchId,_idUsuario) : Observable<any>
    {
        return this.http.get<any>( 'https://pgppain.uk/unilol/api/match/posicao/' + _matchId + '/' + _idUsuario);
    }
    public updateInfo(_name, _region)
    {
        return this.http.get<Partida>( 'https://pgppain.uk/unilol/api/match/' + _name + '/' + _region + '/update');
    }
    public getRunaInfo(_id:string):Observable<any>
    {
        return this.http.get<any>('https://pgppain.uk/unilol/api/runa/'+_id + '/detail')
    }
    public getItemInfo(_id:string):Observable<any>
    {
        return this.http.get<any>('https://pgppain.uk/unilol/api/item/'+_id + '/detail')
    }
    public getSpellInfo(_id:string):Observable<any>
    {
        return this.http.get<any>('https://pgppain.uk/unilol/api/spell/'+_id + '/detail')
    }
   
}




