import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private localDataService: LocalDataService) {}

	home: any = {"firstName": "", "lastName": ""};

  	ngOnInit(): void {
	console.log('HomeComponent: ngOnInit()');
		this.localDataService.homeJson()
			.subscribe(resp => {
				console.log('HomeComponent: ngOnInit(): this.localDataService.homeJson: OK', resp);
	      	this.home = resp.body;
	    },
	    error => {
			console.error('HomeComponent: ngOnInit(): this.localDataService.homeJson: Error', error);
	    });
	}
}