import { NodeService } from './node.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  regex = new RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");
  title = 'url-shortener';
  longUrl : string;
  shortUrl :string;
  constructor(private service : NodeService){}
  
  submit(url,inp : HTMLInputElement){
    inp.value = "";

    this.longUrl = this.removeHttp(url.value.longURL);
    

    let random = this.getRandomInt();
    this.shortUrl = "https://ashbob.herokuapp.com/"+random;
    this.service.send({
      "shortUrl" : random,
      "longUrl" : this.longUrl
    }).subscribe((x)=>{
      console.log(x);
    })
  }
  
  getRandomInt() {
    let min = Math.ceil(1000);
    let max = Math.floor(9999);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  removeHttp(longurl){
    var urlHttp = /^(http|https):\/\//gm;
    if(longurl.match(urlHttp)){
      longurl = longurl.replace(urlHttp,"");
    }
    return longurl;
  }
}
