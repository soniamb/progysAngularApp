import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AjoutActionRoutes} from './ajout-action.routes';
import {AjoutActionComponent} from './ajout-action.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(AjoutActionRoutes)
  ],
  declarations: [
      AjoutActionComponent
  ],
})
export class AjoutActionModule {  }
