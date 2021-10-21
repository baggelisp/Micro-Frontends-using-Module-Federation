import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {

  private state = 1

  constructor() { }

  public get getState() {
    return this.state
  }

  public setState(state: number) {
    this.state = state
  }
}
