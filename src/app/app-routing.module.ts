import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModulesModule} from "./modules/modules.module";
import {PagesComponent} from "./modules/frontend/pages/pages.component";
import {HomeComponent} from "./modules/frontend/pages/home/home.component";
import {AboutComponent} from "./modules/frontend/pages/about/about.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path:'about',
        component:AboutComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
