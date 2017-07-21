import { NgModule } from '@angular/core';
import { 
	MdButtonModule, 
	MdCardModule, 
	MdMenuModule, 
	MdToolbarModule, 
	MdIconModule, 
	MdSidenavModule 
} from '@angular/material';

@NgModule({
  declarations: [
  ],
  imports: [
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule
  ],
  exports: [
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule
  ],
  providers: [],
  bootstrap: []
})
export class MaterialModule { }