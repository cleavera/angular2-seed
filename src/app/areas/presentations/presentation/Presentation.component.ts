import {Component} from '@angular/core';
import {Model} from "../../../../services/Model.service";

@Component({
  selector: 'o-presentation',
  styleUrls: ['presentation.css'],
  templateUrl: './presentation.html',
})
export class PresentationsOrchestrator {
  public presentation;

  constructor() {
    Model.getRoot('http://localhost:1337').$promise.then(root => {
      console.log(root);
    });
  }
}
