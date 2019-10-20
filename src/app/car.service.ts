import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class carService {
  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }
  addData(email,password) {
      const obj = {email,password};
      this
          .http
          .post(`${this.url}/add`, obj)
          .subscribe(res => console.log(res));
          console.log("working")
  }
  
  getData() {
      return(
      this
          .http 
          .get(`${this.url}`)
      );
  }
  // upData(id, name) {
  //     const obj = { name };
  //     this
  //         .http
  //         .post(`${this.url}/update/${id}`, obj)
  //         .subscribe(res => console.log(res));
  // }
  // delData(id) {
  //     return this.http.get(`${this.url}/delete/${id}`).subscribe();
  // }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }


    up_data(email,password, id) {

      const obj = {
          email: email,
          password:password
          
        };
      this
        .http
        .post(`${this.url}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }
}
