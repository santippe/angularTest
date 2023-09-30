import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashoboardComponent } from './dashoboard/dashoboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashoboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
