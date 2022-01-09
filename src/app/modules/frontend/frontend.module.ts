import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import {SharedModule} from "../shared/shared.module";
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class FrontendModule { }
