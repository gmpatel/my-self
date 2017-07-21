import { Title } from "@angular/platform-browser"; 
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css'],
  providers : [Title]
})
export class RedComponent implements OnInit {

	constructor(private title: Title, private localDataService: LocalDataService) {
  		this.title.setTitle('GP - Red');
  	}

	ngOnInit() {
	}
}