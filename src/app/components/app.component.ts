import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  	app: any = {};
  	
  	constructor(private localDataService: LocalDataService) {}

  	ngOnInit(): void {
		console.log('AppComponent: ngOnInit()');
	  	this.localDataService.appJson()
	  		.subscribe(resp => {
	  			console.log('AppComponent: ngOnInit(): this.localDataService.appJson: OK', resp);
		      	this.app = resp.body;
		    },
		    error => {
				console.error('AppComponent: ngOnInit(): this.localDataService.appJson: Error', error);
		    });
  	}
}