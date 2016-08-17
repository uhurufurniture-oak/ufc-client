
import {FileUploader} from "ng2-file-upload/ng2-file-upload";

export class ImageUploader extends FileUploader{
  constructor(options:any, public completeCallback, public errorCallback){
    super(options);
  }

  onErrorItem(item:any, response:any, status:any, headers:any){
    this.errorCallback(item, response, status, headers);
  }

  onCompleteItem(item:any, response:any, status:any, headers: any){
    this.completeCallback(response);
  }
  
}
