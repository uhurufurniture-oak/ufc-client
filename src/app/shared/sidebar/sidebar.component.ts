import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import {LayoutService} from "../layout/layout.service";

@Component({
  selector: 'uh-sidebar',
  pipes: [],
  directives: [],
  styles: [
    require('./sidebar.less')
  ],
  host: {
    '(mouseenter)': 'open()',
    '(mouseleave)': 'close()'
  },
  template: require('./sidebar.html'),
  animations: [
    trigger('openClose', [
      state('open', style({transform: 'translate3d(210px, 0, 0)'})),
      state('close', style({transform: 'translate3d(0px, 0, 0)'})),
      transition('open <=> close', animate(400))
    ])
  ]
})
export class SideBarComponent {
  stateExpression: String = 'close';
  
  isOpen: boolean = false;
  isPinned: boolean = false;
  constructor(private _elementRef: ElementRef, private _layoutService: LayoutService) {
    _layoutService.isSidebarOpen.subscribe((open) => {
      this.isOpen = open;
      this.stateExpression = open ? 'open': 'close';
    });
    _layoutService.isMenuPinned.subscribe((pinned) => { this.isPinned = pinned; });
  }

  ngOnInit(){}
  
  open(){
    return this.toggle(true);
  }

  close(){
    return this.toggle(false);
  }
  
  pin() {
    this._layoutService.toggleMenuPin();
  }

  toggle(open: boolean = !this.isOpen) {
    if (this.isPinned){return;}
    
    if((open && this.stateExpression === 'open') || (!open && this.stateExpression === 'close')){
      return
    } else if(!open && this.stateExpression === 'open'){
      this._layoutService.closeSidebar();
    } else {
      this._layoutService.openSidebar();
    }
  }
}
