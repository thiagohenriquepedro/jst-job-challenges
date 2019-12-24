import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './shared/menu.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ChartPageComponent } from './page/dashboard/chart-page/chart-page.component';
import { ListPageComponent } from './page/dashboard/list-page/list-page.component';


const routes: Routes = [
  {path: '', component: MenuComponent,
  children: [
    {path: 'home', component: DashboardComponent},
    {path: 'chart', component: ChartPageComponent},
    {path: 'list', component: ListPageComponent}
  ],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
