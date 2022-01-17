import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { Cart } from 'src/app/models/cart';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public service:MenuService,private snackbar:MatSnackBar) { }
  listdata!:MatTableDataSource<any>;
  columns:string[]=["cartid","Name","size","quantity","price","remove"];
  total:number=0;
  order:boolean=false;
  lorder:boolean=true;

  cart:Cart[]=[];
  quan!:number;

 

  ngOnInit(): void {
    this.refreshCart();
    sessionStorage.setItem('address',(( < HTMLInputElement > document.getElementById("address")).value));
    if(sessionStorage.getItem('log'))
    {
      this.order = true;
      this.lorder = false;
    }
  }
refreshCart()
{
  this.service.getcart().subscribe(data =>{
    this.listdata = new MatTableDataSource(data)
    this.cart = data
  });
  
  // var dummydata = [{cartid:1,name:"Chicken Pizza"},{cartid:2,name:"Corn Pizza"}];
  // this.listdata = new MatTableDataSource(dummydata);

}

removecart(id:number)
{
  if(confirm('Are you sure to delete'))
    {
      this.service.deleteItemCart(id).subscribe(res=>
        {
            this.refreshCart();
            this.snackbar.open("Removed from Cart",'',{
              duration : 7000,
              verticalPosition:'top'
            });
        });
    }
}

calculate()
{
  this.total = 0;
  for(let i=0;i<1;i++)
  {
    var price = (( < HTMLInputElement > document.getElementById("price")).valueAsNumber)
    var quantity = (( < HTMLInputElement > document.getElementById("quantity")).valueAsNumber)
    var size = (( < HTMLInputElement > document.getElementById("drop")).value)

    if(size == '1')
    {
        this.total = 1 * quantity * price;
    }
    else if(size == '2')
    {
      this.total = 1.5 * quantity * price;
    }
    else if(size == '3')
    {
      this.total = 1.75 * quantity * price;
    }
    
  }

  
}

cal()
{
  var size = (( < HTMLInputElement > document.getElementById("drop")).value)

    if(size == '1')
    {
      (( < HTMLInputElement > document.getElementById("price")).value) = '99';
    }
    else if(size == '2')
    {      
      (( < HTMLInputElement > document.getElementById("price")).value) = '148.5';
    }
    else if(size == '3')
    {
      (( < HTMLInputElement > document.getElementById("price")).value) = '173.25';
    }
}

}
