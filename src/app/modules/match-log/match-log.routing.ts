// Angular Modules
import { Routes, RouterModule } from "@angular/router";
import { MatchLogListComponent } from './pages/list/match-log.component';
import { NgModule } from '@angular/core';

const routes_paths: Routes = [
    { path: '', component: MatchLogListComponent }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes_paths)],
    exports: [RouterModule]
  })
  export class MatchLogRouting { }
