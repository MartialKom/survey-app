import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';


@Injectable({
  providedIn: 'root'
})

export class BibleService {

  versesData: any; 

  constructor(private http: HTTP) { }

  public getVerses(): Promise<any>{
    return new Promise((resolve)=>{
      resolve(this.http.get('https://bible-api.com/jn+3?verse_numbers=true',{},{}));
    }) 
  }
}
