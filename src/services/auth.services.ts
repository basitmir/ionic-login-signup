import firebase from 'firebase';
export class authService {
    signup(email: string, password: string){
       return firebase.auth().createUserWithEmailAndPassword(email,password);
    }
    login(email:string, password: string){
      return  firebase.auth().signInWithEmailAndPassword(email,password);
    }
}