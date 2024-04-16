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
  title='mahak';
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
  


getid(id:any){
//  console.log(id)
//   this.dataid=id;
//   this.userService.getOneData(this.dataid).subscribe(id => {
//     this.fetchData = id;
//     console.log(this.fetchData)
//  this.data=this.fetchData
//  console.log(this.data)

    // this.newobj.name=this.fetchData.name;
    // this.email=this.fetchData.email;
    // this.gender=this.fetchData.gender;
    // this.status=this.fetchData.status;
} }
   
 

  



