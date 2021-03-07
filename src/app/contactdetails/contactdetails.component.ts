import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { SendMessageService } from '../send-message.service';
import { Send } from '../send.model';
import { Getstatus } from '../send.model';

@Component({
  selector: 'app-contactdetails',
  templateUrl: './contactdetails.component.html',
  styleUrls: ['./contactdetails.component.css']
})
export class ContactdetailsComponent implements OnInit {

  flag:any;
  flag2:any;
  flag3:any;
  bodystr:string='';
  to:string='';
  otp:number=0;
  response_status:Getstatus = {data:''};
  sendData:Send = {to:'',message:''};
  listOfContacts:Contact[]=[{Name: 'Abhishek Tiwari' , Number:'+917897916293'},{Name: 'Babita Tiwari' , Number:'+919935404653'},{Name: 'Rashi Srivastava' , Number:'+916306964491'},{Name: 'Kisan Network' , Number:'+919810153260'}];
  
  constructor(public service: SendMessageService) { }

  ngOnInit(): void {
    this.flag = 0;
    this.flag2 = 2;
  }

  loadDetails(i:any, j:any)
  {
    this.flag = 1;
    this.otp = Math.floor(100000 + Math.random() * 900000);
    this.bodystr = 'Hi ' + i + ' , Your OTP is: ' + this.otp;
    this.to = j;
    this.flag2 = 2;
  }

  sendSMS()
  {
    let regexpNumber: RegExp = /(^|\D)\d{6}($|\D)/;
    if(this.bodystr=='' || !regexpNumber.test(this.bodystr)){
      window.alert("Message doesn't contain 6 digit OTP");
    }else{
    this.sendData.to = this.to;
    this.sendData.message = this.bodystr;
    this.service.sendmsg(this.sendData).subscribe(res=>{
      this.response_status = res as Getstatus;
      console.log("This is my res: " + this.response_status.data);
      if(this.response_status.data == 'queued' || this.response_status.data == 'sent')
      {
        this.flag2 = 1;
      }
      else
      {
        this.flag2 = 0;
      }
    },
    err=>{
      console.log(err);
    });
  }
  }
}
