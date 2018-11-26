import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { authService } from '../../services/auth.services';

/**
 * Generated class for the SignupFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'signup-form',
  templateUrl: 'signup-form.component.html'
})
export class SignupFormComponent {

  text: string;
  formValid:boolean=true;
  submitAttempt:boolean=false;

  constructor(private navCntrl:NavController, private auth:authService, private loadcntrl:LoadingController, private alertcntrl:AlertController) {
    console.log('Hello SignupFormComponent Component');
    this.text = 'Hello World';
  }


  signupform= new FormGroup({
    //name : new FormControl('',([Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')])),
    email : new FormControl('',([Validators.required,Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$')])),
    //phoneNumber : new FormControl('',([Validators.required,Validators.minLength(10),Validators.pattern('[0-9]{10}')])),
    password:new FormControl('',([Validators.required,Validators.minLength(8)])),
    repeatPassword : new FormControl('',Validators.required)
    });
    
   /*
    get name(){
      return this.signupform.get('name');
     
    }
    get phoneNumber(){
     return this.signupform.get('phoneNumber');
   }
   */
    get email(){
      return this.signupform.get('email');
    }
   
    
    get password(){
     return this.signupform.get('password');
   }
   
   get repeatPassword(){
     return this.signupform.get('repeatPassword');
   }
   
     setBackButtonText(){
       
     }
   
   check(){
     if(this.signupform.valid){
       this.formValid=false;
     }
   }
   onGoTo(){
       
     if(this.password.value != this.repeatPassword.value){
       this.submitAttempt=true;
     }
     else{
             const loading=this.loadcntrl.create({
             spinner:'bubbles',
             content: 'Signing you up...'
           });
          loading.present();
       //let data = this.signupform.value;
       this.auth.signup(this.email.value,this.password.value)
       .then(data1 => {loading.dismiss(); })
   
   
       .catch(error =>{
         loading.dismiss();
         const alert=this.alertcntrl.create({
           subTitle: 'Signup Failed!',
           message:error.message,
           buttons:['OK']
         })
         alert.present();    
       });
     
       this.navCntrl.push('LoginPage');
   }
   
     
   //outer else
   }//fun close
   
}
