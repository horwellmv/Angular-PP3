import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email:["email@gmail.com",[Validators.required,Validators.email]],
    password:["", Validators.required],
  })
  constructor(private formBuilder:FormBuilder) {}
  login(){
    if(this.loginForm.valid){
      console.log("Llamar al servicio de login.")
    }
    else{
      alert("Error al cargar los datos.")
    }
  
  }
}

