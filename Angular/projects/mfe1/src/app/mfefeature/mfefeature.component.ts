import { Component, OnInit } from '@angular/core';
import { SharedLibService } from '../../../../shared-lib/src/public-api';

@Component({
  selector: 'app-mfefeature',
  templateUrl: './mfefeature.component.html',
  styleUrls: ['./mfefeature.component.css']
})
export class MfefeatureComponent implements OnInit {

  constructor(public service: SharedLibService) { }

  ngOnInit(): void {
    console.log(this.service.getState)
    this.service.setState(4);
    console.log(this.service.getState)

    
  }

}
