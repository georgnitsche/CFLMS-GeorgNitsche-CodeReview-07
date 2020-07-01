import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { Time } from '@angular/common';

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {



 destination : string = "";
 description : string = "";
 startdate :	string = "";
 duration: string = "";
 price: string = "";
  // ps: number;
  // year: number;

  travels = [
    {
      number: "1",
      destination: "Rio de Janeiro",
      description: "Rio de Janeiro",
      startdate: "01/16/2016",
      duration: "7",
      price: "500",
    },{
      number: "2",
      destination: "Cataratas de Iguazu",
      description: "Cataratas de Iguazu",
      startdate: "21.2.2016",
      duration: "10",
      price: "700",
    },{
      number: "3",
    destination: "Machu Picchu",
    description: "Machu Picchu",
    startdate: "21.2.2014",
    duration: "15",
    price: "1000", 
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
