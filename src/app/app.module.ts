import {NgModule} from '@angular/core'
import {AppComponent} from './app';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {PresentationsOrchestrator} from './areas/presentations/Presentations.component';
import {DataStore} from './service/DataStore.service';
import {PresentationOrchestrator} from "./areas/presentations/presentation/Presentation.component";
import {PresentationsDetailsOrchestrator} from "./areas/presentations/presentation/details/PresentationDetails.component";
import {SlidesOrchestrator} from "./areas/presentations/presentation/slides/Slides.component";

@NgModule({
  declarations: [AppComponent, PresentationsOrchestrator, PresentationOrchestrator, PresentationsDetailsOrchestrator, SlidesOrchestrator],
  imports     : [BrowserModule, FormsModule, HttpModule],
  providers   : [DataStore, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
