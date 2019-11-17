import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    HomeRouting,
    TranslateModule
    
  ],
  declarations: [
    HomeComponent,
    // CardComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }]
})
export class HomeModule { }