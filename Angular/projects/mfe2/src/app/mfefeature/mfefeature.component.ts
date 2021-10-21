import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mfefeature',
  templateUrl: './mfefeature.component.html',
  styleUrls: ['./mfefeature.component.css']
})
export class MfefeatureComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addCounter() {
    this.counter = this.counter + 1
  }
  

}
