import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {Home} from './home/home';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {PresentationsOrchestrator} from './areas/presentations/Presentations.component';
import {DataStore} from './service/DataStore.service';
import {PresentationsDetailsOrchestrator} from "./areas/presentations/presentation/Presentation.component";

@NgModule({
  declarations: [AppComponent, PresentationsOrchestrator, PresentationsDetailsOrchestrator, Home],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [DataStore, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
