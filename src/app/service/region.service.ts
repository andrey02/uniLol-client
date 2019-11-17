import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable }     from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegionService
{
    public headers = new Headers();

    constructor(public http:HttpClient){}

    public updateRegionFromBackend(_regiao:string, ) : Observable<any>
    {
        return this.http.get<any>( 'https://pgppain.uk/unilol/api/regiao/' + _regiao);
    }
}