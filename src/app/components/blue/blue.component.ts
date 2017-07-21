import { Title } from "@angular/platform-browser"; 
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css'],
  providers : [Title]
})
export class BlueComponent implements OnInit {

	constructor(private title: Title, private localDataService: LocalDataService) {
  		this.title.setTitle('GP - Blue');
  	}

	ngOnInit() {
  	}
}