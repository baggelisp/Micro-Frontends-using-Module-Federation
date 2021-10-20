import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      import('mfe1/MfefeatureModule').then((m) => {
        return m.MfefeatureModule;
      }),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      import('mfe2/MfefeatureModule').then((m) => {
        return m.MfefeatureModule;
      }),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
