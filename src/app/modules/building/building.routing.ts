// Angular Modules
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { BuildingComponent } from './building.component';

const routes_paths: Routes = [
    { path: '', component: BuildingComponent }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes_paths)],
    exports: [RouterModule]
  })
  export class BuildingRouting { }
