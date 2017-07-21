// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; //import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalDataService {
	
	private appJsonUrl = '/assets/data/this/app-data.json';
	private homeJsonUrl = '/assets/data/this/home-data.json';
  	
  	constructor(private client: HttpClient, private http: Http) { }

	appJson() {
     	return this.client.get(this.appJsonUrl, { observe: 'response' });
 	}

 	homeJson() {
     	return this.client.get(this.homeJsonUrl, { observe: 'response' });
 	}
}