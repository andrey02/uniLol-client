import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';



import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { LanguageService } from '../../config/translate.config';
import { TranslateModule } from '@ngx-translate/core';
import { ChampionService } from '../../service/champion.service';
import { AnalysisLanePage } from './component/analysis-lane-page.component';
import { AnalysistByLaneRouting } from './analysis-lane.routing';
import { AnalysisService } from '../../service/analysis.service';
import { FinalScreenPage } from './final-screen/final-screen.page.component';
// import { Observable } from 'rxjs';
import { TabsModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    AnalysistByLaneRouting,
    SharedModule,
    TranslateModule,
    TabsModule.forRoot()
  ],
  declarations: [
    AnalysisLanePage,
    FinalScreenPage
  ],
  providers: [
    LanguageService,
    ChampionService,
    AnalysisService
  ]
})
export class AnalysisByLaneModule { 
  constructor(
    public languageService:LanguageService
  ){
    this.languageService.loadLanguage();
  }
}