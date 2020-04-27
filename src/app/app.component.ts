import { FormValidators } from './form.validators';
import { NodeService } from './node.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


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
  form;

  constructor(private service : NodeService , fb : FormBuilder){
   this.form = fb.group({
      longUrlValid : ['',[Validators.required,FormValidators.validUrl]]
    })
  }
  
  submit(url,inp : HTMLInputElement,xyz){
    inp.value = "";
    console.log("FormGroup element : ",xyz);

    this.longUrl = this.removeHttp(url.value.longURL);
    

    let random = this.getRandomInt();
    this.shortUrl = "https://ashbob.herokuapp.com/"+random;
    this.service.send({
      "shortUrl" : random,
      "longUrl" : this.longUrl
    }).subscribe((x)=>{
      //console.log(x);
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
