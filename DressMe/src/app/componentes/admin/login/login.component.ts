import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginUsuario: FormGroup;

  constructor(private fb:FormBuilder,private afAuth: AngularFireAuth,private router: Router){
    
    this.loginUsuario= this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
    const email= this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
    
    this.afAuth.signInWithEmailAndPassword(email,password).then((usuario)=>{
      this.router.navigate(['/dashboard']);
    }).catch((err)=>{
      console.log(err);
      alert(err)
    })
  }

}

