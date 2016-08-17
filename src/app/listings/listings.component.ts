import {Component, ViewEncapsulation} from "@angular/core";
import {Listing} from "./listing";
import {ListingsService} from "./listings.service";
import {DataTable, Column, Dropdown, Dialog} from "primeng/primeng";
import {FILE_UPLOAD_DIRECTIVES} from "ng2-file-upload/ng2-file-upload";
import {NgClass, NgStyle, CORE_DIRECTIVES} from "@angular/common";
import {FORM_DIRECTIVES, FormGroup, FormBuilder} from "@angular/forms";
import {ProgressBar} from "../shared/progress-bar/progress-bar";
import {ImageUploader} from "../shared/image-uploader/image-uploader";


@Component({
  selector: 'router-outlet',
  encapsulation: ViewEncapsulation.None,
  template: require('./listings.html'),
  styles: [
    require('./listings.less')
  ],
  providers: [ListingsService],
  directives: [
    DataTable,
    Column,
    Dropdown,
    Dialog,
    FILE_UPLOAD_DIRECTIVES,
    NgClass,
    NgStyle,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    ProgressBar
  ]
})
export class ListingsComponent {
  listings:Listing[];
  selectedListings:Listing[];
  isLoading:boolean = true;
  addNewPost:boolean = false;
  showProgress:boolean = true;
  uploader:ImageUploader;
  hasDropZoneOver:boolean = false;
  postForm:FormGroup;
  newListing:Listing;

  constructor(private listingsService:ListingsService, fb:FormBuilder) {
    this.newListing = new Listing();
    listingsService.listings.subscribe(
      (listings) => {
        this.listings = listings;
        this.isLoading = false;
      },
      error => console.log(error)
    );
    this.uploader = new ImageUploader({
      url: 'http://localhost:8080/cl/img',
      autoUpload: 'true'
    }, this.handleUploadComplete, this.handleUploadError);
  }

  public onSubmit() {
    this.listingsService.addListing(this.newListing).subscribe(
      listing => {
        
      }
    );
  }

  public handleUploadComplete = (response):void => {
    this.newListing.imgLink = JSON.parse(response).link;
    this.showProgress = false;
  };

  public handleUploadError = (item, response, status, header):void => {
    console.log(response);
    this.showProgress = false;
  };

  public handleFileDrop() {
    this.showProgress = true;
  }

  public resetForm() {
    this.newListing = new Listing();
  }

  showAddPostDialog() {
    this.addNewPost = true;
  }

  fileOverBase(e:any):void {
    this.hasDropZoneOver = e;
  }

  ngOnInit() {

  }
}