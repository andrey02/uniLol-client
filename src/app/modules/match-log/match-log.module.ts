import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';


import { MatchLogListComponent } from './pages/list/match-log.component';
import { MatchLogRouting } from './match-log.routing';
import { MatchLogService } from './match-log.service';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { LanguageService } from '../../config/translate.config';
import { RegionPipe } from './components/region.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { ChampionService } from '../../service/champion.service';
import { TableRegion } from './components/table-region/table-region';
import { RanqueadaPipe } from './pages/ranqueda.pipe';
// import { Observable } from 'rxjs';


@NgModule({
  imports: [
    MatchLogRouting,
    SharedModule,
    TranslateModule
  ],
  declarations: [
    MatchLogListComponent,
    TableRegion,
    RanqueadaPipe
    
  ],
  providers: [
    MatchLogService,
    LanguageService,
    ChampionService
  ]
})
export class MatchLogModule { 
  constructor(
    public languageService:LanguageService
  ){
    this.languageService.loadLanguage();
  }
}