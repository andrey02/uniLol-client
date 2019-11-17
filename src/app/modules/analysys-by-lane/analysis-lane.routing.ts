// Angular Modules
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AnalysisLanePage } from './component/analysis-lane-page.component';
import { FinalScreenPage } from './final-screen/final-screen.page.component';

const routes_paths: Routes = [
    { path: '', component: AnalysisLanePage },
    { path: ':id', component: FinalScreenPage }
];

@NgModule({
    imports: [RouterModule.forChild(routes_paths)],
    exports: [RouterModule]
  })
  export class AnalysistByLaneRouting { }