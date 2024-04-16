import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  signupForm:any;
  apiid:any;
  fetchData:any;
  name:any;
  email:any;
  gender:any;
  status:any;
  productMsg:any;
  @Input()
  data!: any[];
  constructor(private userService: UserService ,private route:ActivatedRoute, private router:Router){}

    ngOnInit(){
    
      this.signupForm= new FormGroup({
        
          'name' :new FormControl('',[Validators.required]),
          'gender': new FormControl(` gender`,[ Validators.required]),
          'email': new FormControl(`email`,[Validators.required, Validators.email]),
           'status': new FormControl(`status`,[Validators.required])
      });
      console.log(this.route )
      console.log(this.route.snapshot.params[`id`])
      this.apiid=this.route.snapshot.params[`id`]
      console.log(this.apiid)
      this.edit()
     this.newdata()
     
     }
     edit(){
      this.userService.getOneData(this.apiid).subscribe(id => {
        this.fetchData = id;
        console.log(this.fetchData)
     
        this.name=this.fetchData.name;
        this.email=this.fetchData.email;
        this.gender=this.fetchData. gender;
        this.status=this.fetchData.status;
   
      this.signupForm.patchValue({ name: this.name});
      this.signupForm.patchValue({ gender: this.gender});
      this.signupForm.patchValue({ email: this.email});
      this.signupForm.patchValue({ status: this.status});

    })
   
    }

     onSubmit(){

      console.log(this.signupForm.value)
      this.userService.putData(this.signupForm.value , this.apiid).subscribe((result)=>{
        console.log(result)
        if(result){
          this.productMsg="product has updated"
        }
        setTimeout(()=>{
          this.productMsg=undefined;
        },3000);
      })
    }
  
    cancel(){
      this.signupForm.reset();
      this.router.navigate(['/'])
     }
   
      newdata(){
        console.log(this.data)
      }

}

