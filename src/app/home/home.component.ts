import {
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { HeaderComponent } from '../shared/header/header.component';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { SideBarComponent } from "../shared/sidebar/index";

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'router-outlet',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    
  ],
  encapsulation: ViewEncapsulation.None,
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    SideBarComponent,
    HeaderComponent,
    ROUTER_DIRECTIVES
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./home.style.less') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.template.html')
})

export class Home{
  // Set our default values
  // TypeScript public modifiers
  public views: Object[] = [
    {title: 'Dashboard', icon: 'pg-home', path: ""},
    {title: 'Listings', icon: 'fs-14 fa fa-tag', path: "listings"}
  ];

  constructor() {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

}
