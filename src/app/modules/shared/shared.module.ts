import { BrowserModule  } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { Ng5BreadcrumbModule,BreadcrumbService} from 'ng5-breadcrumb';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingComponent } from './loading/loading.component';
import { Ng2OdometerModule } from 'ng2-odometer'; 
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { RegionPipe } from '../match-log/components/region.pipe';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ModalComponent } from './modal/modal.component';
import { RegionService } from '../../service/region.service';

@NgModule({
  imports: [
    // NoopAnimationsModule,
    HttpClientModule,
    CommonModule,
    HttpModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    Ng5BreadcrumbModule,
    FormsModule, 
    TranslateModule,
    Ng2OdometerModule.forRoot(),
    TooltipModule.forRoot(),
  
  ],
  declarations: [
    LoadingComponent,
    RegionPipe,
    ModalComponent
  ],
  exports:[
    // NoopAnimationsModule,
    HttpClientModule,
    CommonModule,
    HttpModule,
    PerfectScrollbarModule,
    BsDropdownModule,
    TabsModule,
    ChartsModule,
    Ng5BreadcrumbModule,
    FormsModule,    
    LoadingComponent,
    Ng2OdometerModule ,
    TooltipModule,
    RegionPipe,
    ModalComponent                    
    // ReactiveFormsModule 
  ],
  providers: [
    RegionService
  ]
})
export class SharedModule { 

}
