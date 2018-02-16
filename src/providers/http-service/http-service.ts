import { HttpClient , HttpHeaders , HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {

  constructor(public http: HttpClient) {

  }

  requestSend(url : string , data : any){


    let headers = new HttpHeaders();

    headers.append('mimeType' , 'multipart/form-data');
    headers.append('cache-control','no-cache');
    headers.append('Access-Control-Allow-Origin' , '*')

    return new Promise((resolve , reject) => {
      this.http.post(url , data , { headers:headers }).subscribe(data => {
        //console.log(data);
        resolve(data);
      })
    })
  }

}
