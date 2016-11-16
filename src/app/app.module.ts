import {NgModule} from '@angular/core'
import {AppComponent} from './app';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {DataStore} from './service/DataStore.service';
import {ResourceManagerModule} from "./modules/resourceManager/ResourceManager.module";

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule, HttpModule, ResourceManagerModule],
  providers   : [DataStore, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {}
