import {NgModule} from '@angular/core'
import {AppComponent} from './app';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {DataStore} from './service/DataStore.service';
import {PresentationsModule} from "./components/orchestrators/presentations/Presentations.module";

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, FormsModule, HttpModule, PresentationsModule],
  providers   : [DataStore, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {}
