// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; //import { Observable } from 'rxjs/Observable';
import { MiscService } from './misc.service'

@Injectable()
export class LocalDataService {
	
	constructor(private miscService: MiscService, private client: HttpClient, private http: Http) {}

	appJson() {
		let appJsonUrl: string = this.miscService.getExternalUrl('/assets/data/this/app-data.json');
     	this.miscService.log('LocalDataService: appJson()', appJsonUrl);
		
		return this.client.get(appJsonUrl, { observe: 'response' });
 	}

 	homeJson() {
 		let homeJsonUrl: string = this.miscService.getExternalUrl('/assets/data/this/home-data.json');
  	 	this.miscService.log('LocalDataService: homeJson()', homeJsonUrl);
    	
    	return this.client.get(homeJsonUrl, { observe: 'response' });
 	}
} 	