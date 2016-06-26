
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'uh-header',
  pipes: [],
  providers: [],
  directives: [],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./header.less')
  ],
  template: require('./header.html')
})

export class HeaderComponent {
  name = 'Uhuru Furniture & Collectibles';
  constructor() {
    
  }
  
  ngOnInit() {
    console.log('HeaderComponent initialised');
  }
}