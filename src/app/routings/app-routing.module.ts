import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from '../components/app.component';
import { HomeComponent }   from '../components/home/home.component';
import { RedComponent }   from '../components/red/red.component';
import { BlueComponent }   from '../components/blue/blue.component';
import { GreenComponent }   from '../components/green/green.component';

const routes: Routes = [
  { path: '',  component: HomeComponent }, //, redirectTo: '/home', pathMatch: 'full'
  { path: 'home',  component: HomeComponent },
  { path: 'red',  component: RedComponent },
  { path: 'blue',  component: BlueComponent },
  { path: 'green',  component: GreenComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}