import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  public number: number;
  constructor() {
    this.number = 0;
  }

  public addOne() {
    this.number ++;
  }
}
