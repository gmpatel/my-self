import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LocalDataService } from '../../services/local-data.service';
import { MiscService } from '../../services/misc.service'

@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit {

	constructor(private miscService: MiscService, private localDataService: LocalDataService) {
  		this.miscService.setTitle('GP | Blue');
  	}

	ngOnInit() {
  	}
}