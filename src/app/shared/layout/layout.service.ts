import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/Rx";
@Injectable()
export class LayoutService {
  private _isSidebarOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _isMenuPinned: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(){}

  get isSidebarOpen() {
    return this._isSidebarOpen.asObservable();
  }
  get isMenuPinned() {
    return this._isMenuPinned.asObservable();
  }
  openSidebar() {
    this._isSidebarOpen.next(true);
  }

  closeSidebar() {
    this._isSidebarOpen.next(false);
  }

  toggleMenuPin() {
    let current = this._isMenuPinned.getValue();
    this._isMenuPinned.next(!current);
  }
}
