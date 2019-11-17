import { BrowserModule  } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {CardComponent} from '../app/modules/home/components/card/card.component';
import {LoadingComponent} from '../app/modules/shared/loading/loading.component';
// Import routing module
import { AppRoutingModule } from './app.routing';
import { MatchLogModule } from './modules/match-log/match-log.module';
import { HomeModule } from './modules/home/home.module';
import { Router } from '@angular/router';
import { SharedModule } from './modules/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from './config/translate.config';
import { RegionService } from './service/region.service';

//google chart
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    Ng2GoogleChartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    //LoadingComponent
  ],
  providers: [
    CookieService,
    LanguageService,
    RegionService,
    {provide: LocationStrategy, useClass:HashLocationStrategy} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public router:Router)
  {
    
  }
  ngDoBootstrap(app: ApplicationRef)
  {
    console.log('Bootstraping...')
  }
  ngOnInit()
  {
    console.log('Init...')
  }
}
