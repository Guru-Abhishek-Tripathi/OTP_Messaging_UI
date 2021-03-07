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
  response_status:string = '';
  rr:Getstatus = {data:''};
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
    this.sendData.to = this.to;
    this.sendData.message = this.bodystr;
    this.service.sendmsg(this.sendData).subscribe(res=>{
      this.rr = res as Getstatus;
      console.log("This is my res: " + this.rr.data);
      if(this.rr.data == 'queued' || this.rr.data == 'sent')
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
