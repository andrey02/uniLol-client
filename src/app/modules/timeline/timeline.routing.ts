// Angular Modules
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { TimelineComponent } from './page/timeline.page';

const routes_paths: Routes = [
    { path: '', component: TimelineComponent }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes_paths)],
    exports: [RouterModule]
  })
  export class TimeLineRouting { }