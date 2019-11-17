import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { LanguageService } from '../../config/translate.config';
import { TimeLineRouting } from './timeline.routing';
import { TimelineComponent } from './page/timeline.page';
import { TimeLineService } from '../../service/timeline.service';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { TranslateModule } from '@ngx-translate/core';
import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    TimeLineRouting,
    SharedModule,
    Ng2GoogleChartsModule,
    TranslateModule,
    TabsModule.forRoot()
  ],
  declarations: [
    TimelineComponent
  ],
  providers: [
    LanguageService,
    TimeLineService
  ]
})
export class TimeLineModule { 
  constructor(
    public languageService:LanguageService
  ){
    this.languageService.loadLanguage();
  }
}