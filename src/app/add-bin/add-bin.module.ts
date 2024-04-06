import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBinPageRoutingModule } from './add-bin-routing.module';

import { AddBinPage } from './add-bin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBinPageRoutingModule
  ],
  declarations: [AddBinPage]
})
export class AddBinPageModule {}
