import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  text: string;
  submitAttempt:boolean=false;

  constructor(private navcntrl:NavController) {
    console.log('Hello LoginFormComponent Component');
    this.text = 'Hello World';
  }


  signinform=new FormGroup({
    email:new FormControl('',([Validators.required,Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$')])),
    password:new FormControl('',([Validators.required,Validators.minLength(8)]))
    
    });
     onsigninform(signinform:any){
       console.log(signinform.value);
     }
     
    get email(){// gives acess to form control object
      return this.signinform.get('email');
    }
    get password(){
      return this.signinform.get('password');
    }

    onLogin(signinform){
      if(this.signinform.valid){
        this.submitAttempt=false;
        console.log ('false');
      }
      else{
        this.submitAttempt=true;
        console.log('true');
      }
      console.log(signinform);
      
    }
    onSignup(){
      this.navcntrl.push('SignupPage');
    }
}
