import { Injectable, Inject } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class MiscService {
  private baseUrl: string;
  private rootUrl: string;

  constructor(private location: Location, private title: Title, private meta: Meta) { 
    this.rootUrl = location.normalize('/');
    this.baseUrl = location.prepareExternalUrl('/');
    this.log("MiscService: constructor()", location, 'rootUrl = "' + this.rootUrl + '"', 'baseUrl = "' + this.baseUrl + '"');
  }

  getNormalizedUrl(url: string): string{
    let retUrl = this.location.normalize(url);
    this.log("MiscService: getNormalizedUrl()", "Normalized url '" + url + "'" + " to "  + "'" + retUrl + "'"); 
    return retUrl;
  }

  getExternalUrl(url: string): string{
    let retUrl = this.location.prepareExternalUrl(url);
    this.log("MiscService: getExternalUrl()", "External (with baseHref) url '" + url + "'" + " to "  + "'" + retUrl + "'"); 
    return retUrl;
  }

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  setDescription(description: string) {
    this.meta.updateTag({
      name: 'description',
      content: description
    });
  }

  log(message?: any, ...optionalParams: any[]){
     console.log(message, optionalParams);
  }

  error(message?: any, ...optionalParams: any[]){
     console.error(message, optionalParams);
  }

  warn(message?: any, ...optionalParams: any[]){
     console.warn(message, optionalParams);
  }

  debug(message?: any, ...optionalParams: any[]){
     console.debug(message, optionalParams);
  }
}