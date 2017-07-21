import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';
import { MiscService } from '../../services/misc.service'

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {

	constructor(private miscService: MiscService, private localDataService: LocalDataService) {
  		this.miscService.setTitle('GP | Green');
  	}

	ngOnInit() {
	}
}