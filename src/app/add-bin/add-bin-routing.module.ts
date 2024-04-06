import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBinPage } from './add-bin.page';

const routes: Routes = [
  {
    path: '',
    component: AddBinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBinPageRoutingModule {}
