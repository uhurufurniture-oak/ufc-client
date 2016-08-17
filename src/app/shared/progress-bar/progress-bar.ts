
import {Component, OnInit, Input} from "@angular/core";
import {isPresent} from "@angular/platform-browser-dynamic/src/facade/lang";
@Component({
  selector: 'ui-progress-bar',
  styles: [
    require('./progress-bar.less')
  ],
  template: `
    <div class="ui-progress-bar">
      <div class="progress" [style.width]="progress" [style.opacity]="show ? '1': '0'" [style.color]="color"></div>
    </div>
    `
})
export class ProgressBar implements OnInit {
  private _progress: string = '0%';
  @Input() set progress(value: string){
    if(isPresent(value)){
      this._progress = value + '%';
    }
  }
  get progress(): string {
    return this._progress;
  }
  @Input() color: string = 'firebrick';
  @Input() show: boolean = true;
  ngOnInit() {}
}