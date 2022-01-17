import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReviewService } from 'src/app/services/review.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-displayreview',
  templateUrl: './displayreview.component.html',
  styleUrls: ['./displayreview.component.css']
})
export class DisplayreviewComponent implements OnInit {

  review:boolean=false;
  listdata!:MatTableDataSource<any>;
  columns:string[]=["reviewid","username","pizzaname","review","stars"];

  constructor(private service:ReviewService) { }

  ngOnInit(): void {
    this.refreshList();
    console.log(this.listdata);
  }


  refreshList()
  {
      this.service.getreview().subscribe(data=>{
        this.listdata = new MatTableDataSource(data);
      });
  }
}
