import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-truck-account',
  templateUrl: './truck-account.component.html',
  styleUrls: ['./truck-account.component.less']
})
export class TruckAccountComponent implements OnInit {
  tabs = [1, 2, 3];
  constructor() { }

  ngOnInit(): void {
  }

}
