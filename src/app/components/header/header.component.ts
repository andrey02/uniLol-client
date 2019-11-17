import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../config/translate.config';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit 
{
    constructor(public languageService:LanguageService, public cookieService:CookieService)
    {
        
    }
    public languageSelected:string = "__default__";
    ngOnInit(): void 
    {
        if(this.cookieService.get('i18n'))
        {
            this.languageSelected = this.cookieService.get('i18n')
        }
    }
}