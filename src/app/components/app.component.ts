import { Component, ViewEncapsulation, OnInit, Input, OnChanges } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';
import { MiscService } from '../services/misc.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  	app: any;
  	
  	constructor(private miscService: MiscService, private localDataService: LocalDataService) {
  		miscService.log('HomeComponent: constructor()');
      miscService.setTitle('GP');
  	}

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