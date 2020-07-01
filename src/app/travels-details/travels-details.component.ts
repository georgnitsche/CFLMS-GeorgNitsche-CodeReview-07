import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { travels } from './../travels';

@Component({
  selector: 'app-travels-details',
  templateUrl: './travels-details.component.html',
  styleUrls: ['./travels-details.component.css']
})
export class TravelsDetailsComponent implements OnInit {
	travels;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
  		this.travels = travels[+params.get('travelsId')];
  	});
  	
  }

}
