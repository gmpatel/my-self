import { Title } from "@angular/platform-browser"; 
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css'],
  providers : [Title]
})
export class GreenComponent implements OnInit {

	constructor(private title: Title, private localDataService: LocalDataService) {
  		this.title.setTitle('GP - Green');
  	}

	ngOnInit() {
	}
}