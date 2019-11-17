import { Http, Response, Headers, RequestOptions }  from '@angular/http';
import { Injectable }                               from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { RegionService } from '../service/region.service';


@Injectable()
export class LanguageService 
{
    public headers = new Headers();

    constructor(
        public http          :  Http, 
        public translate     :  TranslateService,
        private cookieService:  CookieService,
        private regionService:  RegionService
    ) 
    {
        this.loadLanguage();
        
    }

    public async loadLanguage() 
    {
        var languages : string[] = ["pt-br", "es-mx", "en-us"];

        let language = this.getLanguage();
        await this.translate.reloadLang(language);
        this.translate.use(language);
               
    }
    public async  reloadLanguage(_newLang:string)
    {
        if(_newLang && _newLang != '__default__')
        {
            this.translate.use(_newLang);
            this.cookieService.set('i18n',_newLang);
        }
        if(_newLang == 'pt-br')
        {
            await this.regionService.updateRegionFromBackend('BRAZIL').toPromise().then();
        }
        else
        {
            await this.regionService.updateRegionFromBackend('NORTH_AMERICA').toPromise().then();
        }
        window.location.reload();
    }

    public getLanguage()
    {
        let langDefault :string = "en-us";
        this.translate.addLangs(['en-us', 'pt-br']);
        this.translate.setDefaultLang(langDefault);
        if(this.cookieService.get('i18n'))
        {
           return this.cookieService.get('i18n'); 
        }
        else
        {
            this.cookieService.set('i18n',langDefault);
            return langDefault;
        }
    }

  
}

