import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MfefeatureComponent } from './mfefeature.component';

const routes: Routes = [
  {
    path: '',
    component: MfefeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MfefeatureRoutingModule { }
