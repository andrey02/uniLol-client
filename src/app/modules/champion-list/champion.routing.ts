import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionListComponent } from './page/champion-list';


const routes: Routes = [
    {
        path: '',
        component: ChampionListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampionRouting { }