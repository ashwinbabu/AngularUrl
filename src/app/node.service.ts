import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  url = "https://ashbob.herokuapp.com/";
  
  constructor(private http : HttpClient) { }
  send(obj){
   return this.http.post(this.url,obj);
  }
}
