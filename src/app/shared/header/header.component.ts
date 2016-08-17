
import { Component, ViewEncapsulation} from '@angular/core';
import {LayoutService} from "../layout/layout.service";
import {AuthService} from "../auth/auth.service";

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
  private _isSidebarOpen: boolean = false;
  constructor(private _layoutService: LayoutService, private _auth: AuthService) {
    _layoutService.isSidebarOpen.subscribe((open) => this._isSidebarOpen = open);
    
  }

  toggleSidebar(){
    if(this._isSidebarOpen) {
      this._layoutService.closeSidebar();
    } else {
      this._layoutService.openSidebar();
    }
  }
  
  ngOnInit() {

  }
}