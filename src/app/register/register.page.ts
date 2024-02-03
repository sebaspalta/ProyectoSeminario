import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El Email es obligatorio." },
      { type: "pattern", message: "El Email ingresado no es valido." }
    ],
     password: [
      { type: "required", message: "la contraseña es obligatoria." },
      { type: "minLength", message: "La contraseña Debe tener como minimo 5 caracteres"},
      { type: "maxLength", message: "La contraseña debe tener como máximo 15 caracteres"}
    ],
    confirmation_password:[
      { type: "required", message: "la contraseña es obligatoria." },
      { type: "minLength", message: "La contraseña Debe tener como minimo 5 caracteres"},
      { type: "maxLength", message: "La contraseña debe tener como máximo 15 caracteres"}  
    ],
    name:[
      { type: "required", message: "el nombre es obligatorio." },
      { type: "minLength", message: "el nombre Debe tener como minimo 3 caracteres"},
      { type: "maxLength", message: "el nombre debe tener como máximo 15 caracteres"}
    ],
    last_name: [
      { type: "required", message: "el apellido es obligatoria." },
      { type: "minLength", message: "el apellido Debe tener como minimo 3 caracteres"},
      { type: "maxLength", message: "el apellido debe tener como máximo 15 caracteres"}
    
    ]
  }
  registerMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage
  ) { 
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      )
      , 
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ])
      ),
      confirmation_password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ])
      ),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(15),
        ])
      )
    })
    }

  ngOnInit() {
  }

  register(register_data: any){
    console.log(register_data);
     this.authService.registerUser(register_data).then(res => {
      this.registerMessage = res;
      this.storage.set('registerLoggedIn', true);
      this.navCtrl.navigateForward('/login');
    }).catch(err => {
      this.registerMessage = err;
    }); 
    //crear el servicio de registro
  }

  goToLogin(){
    this.navCtrl.navigateBack("/login");
  }

}