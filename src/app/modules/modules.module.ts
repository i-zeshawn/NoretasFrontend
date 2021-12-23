import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "./shared/shared.module";
import {FrontendModule} from "./frontend/frontend.module";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FrontendModule
  ]
})
export class ModulesModule {
}
