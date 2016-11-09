import {NgModule} from '@angular/core'
import {AppComponent} from './app';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {PresentationsOrchestrator} from './areas/presentations/Presentations.component';
import {DataStore} from './service/DataStore.service';
import {PresentationsDetailsOrchestrator} from "./areas/presentations/presentation/Presentation.component";

@NgModule({
  declarations: [AppComponent, PresentationsOrchestrator, PresentationsDetailsOrchestrator],
  imports     : [BrowserModule, FormsModule, HttpModule],
  providers   : [DataStore, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
