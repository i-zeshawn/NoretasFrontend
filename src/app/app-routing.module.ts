import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ModulesModule} from "./modules/modules.module";
import {PagesComponent} from "./modules/frontend/pages/pages.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
