import {NgModule} from '@angular/core'
import {AppComponent} from './app';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {PresentationsOrchestrator} from './components/orchestrators/presentations/Presentations.component';
import {DataStore} from './service/DataStore.service';
import {PresentationOrchestrator} from "./components/orchestrators/presentations/presentation/Presentation.component";
import {PresentationsDetailsOrchestrator} from "./components/orchestrators/presentations/presentation/details/PresentationDetails.component";
import {SlidesOrchestrator} from "./components/orchestrators/presentations/presentation/slides/Slides.component";

@NgModule({
  declarations: [AppComponent, PresentationsOrchestrator, PresentationOrchestrator, PresentationsDetailsOrchestrator, SlidesOrchestrator],
  imports     : [BrowserModule, FormsModule, HttpModule],
  providers   : [DataStore, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
