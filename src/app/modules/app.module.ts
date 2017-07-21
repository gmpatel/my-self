import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { LocalDataService } from '../services/local-data.service'

import { AppRoutingModule }     from '../routings/app-routing.module';

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
    AppRoutingModule
  ],
  providers: [LocalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
