import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello SignupFormComponent Component');
    this.text = 'Hello World';
  }

}
