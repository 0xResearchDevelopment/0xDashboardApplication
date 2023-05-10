import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddDataSignalComponent } from './add-data-signal/add-data-signal.component';

import { DataSignalService } from './services/data-signal.service';

@NgModule({
  declarations: [
    AppComponent,
    AddDataSignalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataSignalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
