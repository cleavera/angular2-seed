import {Component} from '@angular/core';
import {$fetch} from '../services/Fetch.service';
import {Model} from "../services/Model.service";

@Component({
  selector   : 'app',
  templateUrl: './app.html',
})
export class AppComponent {
  fetch() {
    // fetch('favicon.ico').then(resp => console.log(resp));
    let model = Model.getRoot('http://localhost:1337');
    model.$promise.then((data) => {
      console.log(data);
      let child = model.link.presentation();

      child.$promise.then(resp => console.log(resp));
    });
    // $fetch('http://localhost:1337/').then(resp => console.log(resp));
  }
}
