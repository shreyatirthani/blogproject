import { Component, OnInit } from '@angular/core';
import {LogingService} from "../loging.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
email;
password;
phoneno;
address;
public demo;
  constructor(private service: LogingService,private router:Router) { }

  ngOnInit() {
  }
signup()
{
let json={
  "email":this.email,
  "password":this.password,
  "phoneno":this.phoneno,
  "address":this.address
}
this.service.getuser(json).subscribe(response =>{
  this.demo=response;
  this.router.navigate(['/login']);
});
}
}
