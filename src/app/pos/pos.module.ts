import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosListComponent } from './pos-list/pos-list.component';


@NgModule({
  declarations: [PosListComponent],
  imports: [
    CommonModule,
    PosRoutingModule
  ]
})
export class PosModule { }
