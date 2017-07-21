import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from '../routings/app-routing.module';
import { MaterialModule } from './material/material.module';

import { LocalDataService } from '../services/local-data.service'
import { MiscService } from '../services/misc.service'

import { AppComponent } from '../components/app.component';
import { HomeComponent } from '../components/home/home.component';
import { RedComponent } from '../components/red/red.component';
import { BlueComponent } from '../components/blue/blue.component';
import { GreenComponent } from '../components/green/green.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RedComponent,
    BlueComponent,
    GreenComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [LocalDataService, MiscService],
  bootstrap: [AppComponent]
})
export class AppModule { }
