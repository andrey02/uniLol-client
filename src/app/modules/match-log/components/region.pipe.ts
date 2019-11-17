import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LanguageService } from '../../../config/translate.config';
@Pipe({name: 'region'})
export class RegionPipe implements PipeTransform
{
   
    constructor(public translateService: TranslateService, public langaugeService:LanguageService)
    {

    }
    transform(_nameRegion: any, ...args: any[]) 
    {
        let value : string;
        switch(_nameRegion)
        {
            case 'BRAZIL':
            return  this.translateService.get( 'modules.match-log.components.region-pipe.BRAZIL') ;
            case 'EUROPE_NORTH_EAST':
            return this.translateService.get('modules.match-log.components.region-pipe.EUROPE_NORTH_EAST');
            case 'EUROPE_WEST':
            return  this.translateService.get('modules.match-log.components.region-pipe.EUROPE_WEST');
            case 'JAPAN':
            return  this.translateService.get('modules.match-log.components.region-pipe.JAPAN');
            case 'KOREA':
            return  this.translateService.get('modules.match-log.components.region-pipe.KOREA');
            case 'LATIN_AMERICA_NORTH':
            return  this.translateService.get('modules.match-log.components.region-pipe.LATIN_AMERICA_NORTH');
            case 'NORTH_AMERICA':
            return  this.translateService.get('modules.match-log.components.region-pipe.NORTH_AMERICA');
            case 'RUSSIA':
            return  this.translateService.get('modules.match-log.components.region-pipe.RUSSIA');
            case 'OCEANIA':
            return  this.translateService.get('modules.match-log.components.region-pipe.OCEANIA');
            case 'TURKEY':
            return  this.translateService.get('modules.match-log.components.region-pipe.TURKEY');
        }
    }
}