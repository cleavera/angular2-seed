import {Component, Injector} from '@angular/core';
import {Model} from '../services/Model.service';
import {Resolve} from "./service/Resolver.annotation";

@Resolve({
  root: () => {
    return Model.getRoot('http://localhost:1337').$promise;
  }
})
@Component({
  selector   : 'app',
  templateUrl: './app.html',
})
export class AppComponent {
  constructor(private $injector: Injector) {}
}
