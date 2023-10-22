import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private auth: AngularFireAuth,private router: Router){}

  logOut(){
    console.log("funciona logout");
    //localStorage.setItem("GuardianToken","");
    //this.afAuth.signOut();
    //this.router.navigate(['/login']);
    this.router.navigate(['/login']);
    this.auth.signOut();
  }

}
