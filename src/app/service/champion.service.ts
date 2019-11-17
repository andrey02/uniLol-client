import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable }     from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Champion } from '../models/champion';

@Injectable()
export class ChampionService
{
    public headers = new Headers();

    constructor(public http:HttpClient
    ){

    }
    // busca as informações do campeão de acordo com o Id
    public getChampionById(_id:string, ) : Observable<Champion>
    {
        return this.http.get<Champion>( 'https://pgppain.uk/unilol/api/campeao/' + _id);
    }
    // busca a lista de campeões quer irá ser utilizada.
    public getChampionList() : Observable<Array<Champion>>
    {
        return this.http.get<Array<Champion> >( 'https://pgppain.uk/unilol/api/campeoes/list');
    }
}
