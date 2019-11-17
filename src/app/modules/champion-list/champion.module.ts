import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { ChampionRouting } from './champion.routing';
import { ChampionListComponent } from './page/champion-list';
import { ChampionService } from '../../service/champion.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { convertToR3QueryMetadata } from '@angular/core/src/render3/jit/directive';



@NgModule({
  imports: [
    SharedModule,
    ChampionRouting,
    TranslateModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#77282f",
      "outerStrokeGradientStopColor": "#f03346",
      "innerStrokeColor": "#3d3839",
      "innerStrokeWidth": 10,
      "animateTitle": false,
      "animationDuration": 1000,
      "titleColor":"#fa0c35",
      "showUnits": false,
      "showBackground": false,
      "clockwise": true,
      "showSubtitle":false
    })
    
  ],
  declarations: [
    ChampionListComponent
  ],
  providers: [{
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    ChampionService
  ]
})
export class ChampionModule { }