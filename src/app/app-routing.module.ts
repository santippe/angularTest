import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashoboardComponent } from './dashoboard/dashoboard.component';
import { AppComponent } from './app.component';
import { ElementListComponent } from './element-list/element-list.component';

const routes: Routes = [
  { path: 'list', component: ElementListComponent },
  { path: '**', component: AppComponent },
  { path: 'dashboard', component: DashoboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
