import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Menuclass } from 'src/app/models/menuclass';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public service:MenuService) { }

  pizzas:Menuclass[] = [];

  listdata!:MatTableDataSource<any>;

  coulmns:string[]=["Pizzaid","Name","Price","Description","Add to Cart"];
  ngOnInit(): void {
  
 this.refreshPizzaList();
  }

  refreshPizzaList()
  {
    this.service.getMenuList().subscribe(data=>{
      this.listdata = new MatTableDataSource(data);
      console.log(data);
    });
        
  }

  addtocart(row:Menuclass[])
  {
    console.log(row);
  }

}
