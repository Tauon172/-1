import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
})
export class CarlistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cars = [
    { name: 'ferrari', model: 'enzo' },
    { name: 'lamborghini', model: 'egoista' },
    { name: 'l', model: 'vesta sport' },
    { name: 'lada', model: 'niva short' },
  ];
}
