// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; //import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocalDataService {
	
	private rootJsonUrl = '/assets/data/this/root-data.json';
  	
  	constructor(private client: HttpClient, private http: Http) { }

	rootJson() {
     	return this.client.get(this.rootJsonUrl, { observe: 'response' });
 	}
}