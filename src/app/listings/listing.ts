
export class Listing {
  //Posting
  constructor(
    public title?: string,
    public id?: number,
    public postLink?: string,
    public status?: string, 
    public postingDate?: string,
    public price?: number,
    public imgLink?: string
  ){}
}