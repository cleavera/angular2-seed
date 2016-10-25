import {Component} from '@angular/core';
import {Model} from "../services/Model.service";

@Component({
  selector   : 'app',
  templateUrl: './app.html',
})
export class AppComponent {
  fetch() {
    let model = Model.getRoot('http://localhost:1337');

    model.$promise.then((root) => {
      console.log(root);

      model.link.presentation().$promise.then(presentation => {
        console.log(presentation);

        presentation.data[0].link.slide().$promise.then(slide => {
          console.log(slide);

          slide.data[0].link.content().$promise.then(content => {
            console.log(content);
          });
        });
      });
    });
  }
}
