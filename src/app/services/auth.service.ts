import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
    return new Promise((accept, reject) => {
      if(
        credential.email == 'sebastian@gmail.com' 
        && credential.password == '123456'
        ){
        accept('Login correcto');
      }else{
        reject('Login incorrecto');
      }
    });
  }

  registerUser(credential: any){
    return new Promise((accept, reject) => {
      if(
        credential.email == 'sebastian@gmail.com' 
        && credential.password == '123456'
        && credential.confirmation_password =='123456'
        && credential.name == 'sebastian'
        && credential.last_name =='palma'
        ){
        accept('registro valido');
      }else{
        reject('registro invalido');
      }
    });
  }
}
