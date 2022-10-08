import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../_Models/product';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  title = 'Products';
  displayedColumns: string[] = ['id', 'name', 'price', 'image', 'description', 'timeStamp', 'likes'];
  dataSource: any;
  empdata: any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: ProductService, ) {

  }
  ngOnInit(): void {
    this.GetAll();
    this.service.RequiredRefresh.subscribe(r => {
      this.GetAll();
    });
  }

  GetAll() {
    this.service.GetProduct().subscribe(result => {
      this.empdata = result;
      this.dataSource = new MatTableDataSource<Product>(this.empdata)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  Filterchange(event: Event) {
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }
  getrow(row: any) {
    console.log(row);
  }
}
