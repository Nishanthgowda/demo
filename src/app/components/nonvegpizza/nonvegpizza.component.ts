import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Vegpizza } from 'src/app/models/vegpizza';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-nonvegpizza',
  templateUrl: './nonvegpizza.component.html',
  styleUrls: ['./nonvegpizza.component.css']
})
export class NonvegpizzaComponent implements OnInit {

  constructor(public service:MenuService,private snackbar:MatSnackBar) { }

  listdata!:MatTableDataSource<any>;
  
  columns:string[]=["name","description","Add to Cart"];

  ngOnInit(): void {
    this.refreshlist();
    console.log(this.listdata)
  }

  refreshlist()
  {
    this.service.getnVegpizzalist().subscribe(data =>
      this.listdata = new MatTableDataSource(data)
      );
  }

  addtocart(row:Vegpizza)
  {
    console.log(row);
    this.service.postcart(row).subscribe(res=>
      {
          this.snackbar.open("Added to Cart",'',{
            duration : 7000,
            verticalPosition:'top'
          });
      });
  }
}
