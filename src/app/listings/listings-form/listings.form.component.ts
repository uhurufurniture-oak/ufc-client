import { Component } from '@angular/core';
import {Listing} from "../listing";

@Component({
  selector: 'uh-listings-form',
  template: require('./listings-form.html'),
  styles: [ require('./listings-form.less') ],
  directives: []
})
export class ListingsFormComponent{
  newListing: Listing;
  
}
