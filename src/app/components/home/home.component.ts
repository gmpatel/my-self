import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';
import { MiscService } from '../../services/misc.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private miscService: MiscService, private localDataService: LocalDataService) {
  	  miscService.log('HomeComponent: constructor()');
	  miscService.setTitle('GP | Home');
  	}

	home: any = {"firstName": "", "lastName": ""};

  	ngOnInit(): void {
		this.miscService.log('HomeComponent: ngOnInit()');
	  	this.localDataService.homeJson()
	    	.subscribe(resp => {
		  		this.miscService.log('HomeComponent: ngOnInit(): this.localDataService.homeJson: OK', resp);
	      		this.home = resp.body;
	      	},
	      	error => {
				this.miscService.error('HomeComponent: ngOnInit(): this.localDataService.homeJson: Error', error);
	      	}
      );
	}
}