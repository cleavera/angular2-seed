import {Component} from '@angular/core';
import {$fetch} from '../services/Fetch.service';

@Component({
  selector   : 'app',
  templateUrl: './app.html',
})
export class AppComponent {
  fetch() {
    // fetch('favicon.ico').then(resp => console.log(resp));
    $fetch('http://localhost:1337/').then(resp => console.log(resp));
  }
}
