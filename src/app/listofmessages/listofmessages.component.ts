import { Component, OnInit } from '@angular/core';
import { Print } from '../response.model';
import { Response } from '../response.model';
import { SendMessageService } from '../send-message.service';

@Component({
  selector: 'app-listofmessages',
  templateUrl: './listofmessages.component.html',
  styleUrls: ['./listofmessages.component.css']
})
export class ListofmessagesComponent implements OnInit {

  constructor(public service:SendMessageService) { }


  responseData:Response[]=[];
  data:Print[] = [];
  response_status:string = '';
  details:string[] = [];
  name:string='';
  otp:string='';


  ngOnInit(): void {
    this.service.getList().subscribe(res=>{
      this.responseData = res as [];
      this.responseData.forEach(m => {
        this.details = m.message.split(" ",15);
        this.name = this.details[8] + ' ' + this.details[9];
        this.otp = this.details[14];
        console.log(this.name+"  "+this.otp +"  "+m.date);
        var object = {name:this.name,otp:this.otp,date:m.date}
        this.data.push(object);
        console.log(this.name + this.otp);
    });
    });
    
  }
}
