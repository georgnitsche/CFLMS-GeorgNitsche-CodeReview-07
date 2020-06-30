import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { Time } from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // model : string = "";
  // ps: number;
  // year: number;

  destinations = [
    {
      name: "Rio de Janeiro",
      date: "01/16/2016",
      time: "16:00:00",
      shortDescr: "Rio de Janeiro",
      img: "https://cdn.pixabay.com/photo/2012/07/03/22/55/rio-de-janeiro-51320_1280.jpg"
    },{
      name: "Cataratas de Iguazu",
      date: "21.2.2016",
      time: "16:00:00",
      shortDescr: "Cataratas de Iguazu",
      img: "https://cdn.pixabay.com/photo/2020/04/13/22/23/waterfall-5040217_1280.jpg"
    },{
    name: "Machu Picchu",
    date: "21.2.2014",
    time: "16:00:00",
    shortDescr: "Machu Picchu",
    img: "https://cdn.pixabay.com/photo/2014/03/30/23/07/mountain-301715_1280.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}


/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/