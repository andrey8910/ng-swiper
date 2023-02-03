import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch:'full' },
  { path: 'main', component: MainComponent, pathMatch:'full'},
  { path: 'about', component: AboutComponent, pathMatch:'full'},
  { path: 'contact',component: ContactComponent, pathMatch:'full'},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
