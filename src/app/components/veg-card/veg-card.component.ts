import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Cart } from 'src/app/models/cart';
import { Menuclass } from 'src/app/models/menuclass';
import { Vegpizza } from 'src/app/models/vegpizza';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-veg-card',
  templateUrl: './veg-card.component.html',
  styleUrls: ['./veg-card.component.css']
})
export class VegCardComponent implements OnInit {

  constructor(public service:MenuService,public snackbar:MatSnackBar) { }

  listdata!:MatTableDataSource<any>;
  columns:string[]=["name","description","Add to Cart"];

  ngOnInit(): void {
    this.refreshlist();
    console.log(this.listdata);
  }

  refreshlist()
  {
    this.service.getVegpizzalist().subscribe(data =>
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
