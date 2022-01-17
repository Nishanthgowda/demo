import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // id: string="";
  constructor(
    // private router: Router, private authService: AuthService
    
    ) { }

 
  ngOnInit(): void {
    // let token = localStorage.getItem('token');
    // if(token)
    // {
    //   document.getElementById("logout")?.style.display;
    // }  
    localStorage.removeItem("isLoggenIn");
  }

  // logout() {  
  //   console.log('logout');  
  //   this.authService.logout();  
  //   this.router.navigate(['/login']);  
  // } 
}
