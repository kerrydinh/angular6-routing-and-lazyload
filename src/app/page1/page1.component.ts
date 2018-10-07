import { Component, OnInit } from '@angular/core';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(public countService: CountService) { }

  ngOnInit() {

  }

  public addValue() {
    this.countService.addOne();
  }
}
