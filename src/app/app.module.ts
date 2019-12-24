import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/Menu/navbar/navbar.component';
import { SidebarComponent } from './shared/Menu/sidebar/sidebar.component';
import { MenuComponent } from './shared/menu.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ChartPageComponent } from './page/dashboard/chart-page/chart-page.component';
import { ListPageComponent } from './page/dashboard/list-page/list-page.component';
import { DashmoduleModule } from './page/dashboard/dashmodule.module';
import { UserService } from './service/user.service';
import { ChartsService } from './service/charts.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MenuComponent,

  ],
  imports: [
    HttpClientModule,
    DashmoduleModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, UserService, ChartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
