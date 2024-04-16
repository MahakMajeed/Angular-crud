import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  submitted: boolean = false;
  signupForm: any;
  data: any;
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() {
    this.signupForm = new FormGroup({

      'name': new FormControl('', [Validators.required]),
      'gender': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'status': new FormControl('', [Validators.required])
    });

  }
  onSubmit() {

    console.log(this.signupForm.value)
    this.data = this.signupForm.value
    this.userService.postData(this.data).subscribe(res => {
    })

  }

  cancel() {
    this.signupForm.reset();
    this.router.navigate(['/'])
  }

}





