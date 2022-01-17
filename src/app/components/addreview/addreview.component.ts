import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  constructor(public service:ReviewService,public snackbar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm)
  {
    this.service.postreview(form.value).subscribe(res =>{
      console.log(form.value);
      this.snackbar.open("Thank you for your review", '', {
        duration: 7000,
        verticalPosition: 'top'
      });
      this.router.navigateByUrl("/displayreviews");
    });
  }
}
