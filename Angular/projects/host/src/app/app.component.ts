import { Component } from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'host';

  constructor(public service: SharedLibService){
    this.service.setState(2);
  }
}
