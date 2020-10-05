import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.less']
})
export class TruckComponent implements OnInit {
  tabs = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}
