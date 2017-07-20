import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LocalDataService } from './services/local-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  	home: any = {"firstName": "", "lastName": ""};
  	
  	constructor(private local: LocalDataService) {}

  	ngOnInit(): void {
		console.log('AppComponent: ngOnInit()');
	  	this.local.rootJson()
	  		.subscribe(resp => {
	  			console.log('AppComponent: ngOnInit(): this.service.getHomeData: OK', resp);
		      	this.home = resp.body;
		    },
		    error => {
				console.error('AppComponent: ngOnInit(): this.service.getHomeData: Error', error);
		    });
  	}
}