import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Send } from './send.model';
import { Print, Response } from './response.model';
@Injectable({
  providedIn: 'root'
})
export class SendMessageService {
 
  constructor(private http:HttpClient) { }
  readonly posturl = "https://sendingsmsapi.herokuapp.com/sms/send";
  readonly geturl = "https://sendingsmsapi.herokuapp.com/sms/smslist";
  sendmsg(sendData:Send)
  {
    return this.http.post(this.posturl,sendData);
  }

  getList(){ 
    return this.http.get(this.geturl);
  }

}
