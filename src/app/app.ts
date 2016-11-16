import {Component, Injector} from '@angular/core';
import {Model} from '../services/Model.service';
import {Resolve} from "./service/Resolver.annotation";
import {Collection} from "../services/Collection.service";

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
  public children: Collection[];

  constructor(private $injector: Injector) {
    this.children = []
  }

  public ngOnResolve(data) {
    Object.keys(data.root.link).filter(link => !['self', 'parent'].includes(link)).forEach(link => {
      this.children.push(data.root.link[link]());
    });
  }
}
