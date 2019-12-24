import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ChartPageComponent } from './chart-page/chart-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    ListPageComponent,
    ChartPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashmoduleModule { }
