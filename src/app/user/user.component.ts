import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userdata:any;
  dataid:any;
  fetchData:any;
 
  data:any[] =[];

  constructor(private userService: UserService ,private router:Router ){}
  
  ngOnInit(){
    this.userService.getdata().subscribe(res => {

      this.userdata = res;
      console.log(this.userdata)
      
     
})

  }
   }
   
 

  



