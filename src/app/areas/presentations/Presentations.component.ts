import {Component} from '@angular/core';
import {Model} from "../../../services/Model.service";

@Component({
  selector: 'o-presentations',
  styleUrls: ['presentations.css'],
  templateUrl: './presentations.html',
})
export class PresentationsOrchestrator {
  public presentations;

  constructor() {
    Model.getRoot('http://localhost:1337').$promise.then(root => {
      console.log(root);
      this.presentations = root.link.presentation();
    });
  }
}
