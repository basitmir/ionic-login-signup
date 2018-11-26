import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, AlertController } from 'ionic-angular';
import { authService } from '../../services/auth.services';

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

  constructor(private navcntrl:NavController, private auth: authService, private alertCntrl: AlertController) {
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
        this.auth.login(this.email.value,this.password.value)
                .then(data=> {const alert=this.alertCntrl.create({
                        subTitle: 'Sucessfull Login!',
         // message:error.message,
                              buttons:['OK']
                                                                  })
                                alert.present();    
                                                               })//then close
                                                      
        .catch(
                  error=>{

                       const alert=this.alertCntrl.create({
                              subTitle: 'Login Failed!',
                                   message:error.message,
                                          buttons:['OK']
                                                           })
                                         alert.present();    
                                       });
      
        

                                        console.log ('false');
      } //if close
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
