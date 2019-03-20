import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ActionServiceService {

  baseUrl = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) {}


  getActions() {
    return this.http.get(this.baseUrl + 'allActions');
  }



}
