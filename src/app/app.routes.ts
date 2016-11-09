import {Routes} from '@angular/router';
import {Home} from './home/home';
import {PresentationsOrchestrator} from "./areas/presentations/Presentations.component";

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'presentations', component: PresentationsOrchestrator}
];

