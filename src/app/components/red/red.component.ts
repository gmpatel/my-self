import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';
import { MiscService } from '../../services/misc.service'

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {

	constructor(private miscService: MiscService, private localDataService: LocalDataService) {
  		this.miscService.setTitle('GP | Red');
  	}

	ngOnInit() {
	}
}