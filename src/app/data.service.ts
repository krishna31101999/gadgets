import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  serverUrl = 'http://localhost:3000/api';

  constructor(private http:HttpClient) {}
    getMobiles(){
      return this.http.get(this.serverUrl + '/mobile')
   }
   getLaptops(){
     return this.http.get(this.serverUrl + '/laptop')
   }
   getHeadphones(){
    return this.http.get(this.serverUrl + '/headphones')

   }
   getCameras(){
    return this.http.get(this.serverUrl + '/camera')
   }

   getTvs(){
    return this.http.get(this.serverUrl + '/tv')

   }
}
