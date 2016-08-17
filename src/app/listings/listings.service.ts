import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Listing} from "./listing";
import {AngularFire} from "angularfire2/angularfire2";
import {Http, Headers, RequestOptions, Response} from "@angular/http";

@Injectable()
export class ListingsService {
  listings:Observable<Listing[]>;
  activeListings:Listing[];
  listingsUrl = '/cl';

  constructor(private af:AngularFire, private http:Http) {
    this.listings = af.database.list('ufc-oak/listings');

    this.listings.subscribe(
      (listings)=> {
        for (let listing of listings) {
          if (listing.status === 'active') {
            this.activeListings.push(listing);
          }
        }
      }
    )
  }

  addListing(newListing:Listing):Observable<Listing> {
    console.log(newListing);
    let body = JSON.stringify({
      title: newListing.title,
      price: newListing.price,
      imgLink: newListing.imgLink
    });
    let headers = new Headers({'Content-type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.listingsUrl, body)
      .map(this.extractResponseData)
      .catch(this.handleError)
  }

  private extractResponseData(res:Response) {
    let data = res.json().data;
    let listing:Listing = new Listing(
      data.title,
      data.id,
      data.postLink,
      data.status,
      data.postingDate,
      data.price,
      data.imgLink
    );
    return listing;
  }

  private handleError(error:any) {
    let errMsg = error.message ? error.message : error.status ? error.status : 'Server Error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}