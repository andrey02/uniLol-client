import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { LanguageService } from '../../config/translate.config';
import { BuildingRouting } from './building.routing';
import { BuildingComponent } from './building.component';


@NgModule({
  imports: [
    BuildingRouting,
    SharedModule
    
    
  ],
  declarations: [
    BuildingComponent
  ],
  providers: [
    LanguageService
  ]
})
export class BuildingModule { 
  constructor(
    public languageService:LanguageService
  ){
    this.languageService.loadLanguage();
  }
}