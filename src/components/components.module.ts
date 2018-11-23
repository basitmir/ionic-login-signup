import {NgModule}  from '@angular/core';
import {IonicModule} from 'ionic-angular';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
    declarations : [LoginFormComponent,
    SignupFormComponent],
    imports : [IonicModule],
    exports :[LoginFormComponent,
    SignupFormComponent]
})
export class ComponentsModule{

}