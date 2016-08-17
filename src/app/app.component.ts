/*
 * Angular 2 decorators and services
 */
import {
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {LayoutService} from "./shared/layout/layout.service";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'body',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./shared/styles/pages.less')
  ],
  host:{
    '[class.sidebar-open]': 'isSidebarOpen',
    '[class.menu-pin]': 'isMenuPinned'
  },
  providers: [
    LayoutService,
  ],
  directives: [ROUTER_DIRECTIVES],
  template: "<router-outlet></router-outlet>"
})
export class AppComponent{
  name = 'Uhuru Furnitures & Collectibles';
  isSidebarOpen: boolean = false;
  isMenuPinned: boolean = false;
  constructor(private _layoutService: LayoutService) {
    _layoutService.isSidebarOpen.subscribe((open) => this.isSidebarOpen = open);
    _layoutService.isMenuPinned.subscribe((pinned) => this.isMenuPinned = pinned);
  }
  
  ngOnInit() {
    console.log('App Init');
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
