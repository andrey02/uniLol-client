
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { LocationStrategy } from '@angular/common';

const routes: Routes = [
    {
        path:'building', loadChildren:'./modules/building/building.module#BuildingModule'
    },
    {
        path: 'home', loadChildren: './modules/home/home.module#HomeModule'
    },
    {path: 'match',  loadChildren: './modules/match-log/match-log.module#MatchLogModule'},
    {path: 'timeline/:id',  loadChildren: './modules/timeline/timeline.module#TimeLineModule'},
    {path: 'champion',  loadChildren: './modules/champion-list/champion.module#ChampionModule'},
    {path: 'analysis',  loadChildren: './modules/analysys-by-lane/analysis-lane.module#AnalysisByLaneModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
