import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';
import { DisplayreviewComponent } from '../displayreview/displayreview.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:AuthService,private snackbar:MatSnackBar,private router:Router,private app:AppComponent) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    console.log(form.value);
    this.service.postuser(form.value).subscribe(res =>{
      console.log(form.value);
      this.snackbar.open("Successfully Registerd", '', {
        duration: 7000,
        verticalPosition: 'top'
      });
      this.router.navigateByUrl("/home");
      sessionStorage.setItem("log","true");
      this.app.login=false;
      this.app.logout=true;
     // this.dispreview.review = true;
    });
  }
}
