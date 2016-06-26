import { Component } from '@angular/core';

@Component({
  selector: 'uh-sidebar',
  pipes: [],
  directives: [],
  styles: [
    require('./sidebar.less')
  ],
  template: require('./sidebar.html')
})
export class SideBarComponent {
  name = 'Uhuru Furniture & Collectibles';
  constructor() {

  }

  ngOnInit() {
    console.log('Sidebar initialised');
  }
}
