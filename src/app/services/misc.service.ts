import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class MiscService {

  constructor(private title: Title, private meta: Meta) { }

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  setDescription(description: string) {
    this.meta.updateTag({
      name: 'description',
      content: description
    });
  }
}