import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginvalid: FormGroup;
  log_in:boolean=true;
  lost_pass:boolean= false;
  constructor() { }

  ngOnInit(): void {
    // sample comment
    this.loginvalid = new FormGroup({
     
      userID : new FormControl('', [Validators.required]),
      Password : new FormControl('', [Validators.required])

    });
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.loginvalid.controls[controlName].hasError(errorName);
  }
  
  lostPass()
  {
    this.log_in = false;
    this.lost_pass = true;
  }
  relogin()
  {
    this.log_in = true;
    this.lost_pass = false;
  }
}

