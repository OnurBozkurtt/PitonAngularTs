import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../_services/product.service';
import { Product } from '../_Models/product';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

    export class ProductDetailsComponent implements OnInit {
        product!: Product;
   
    constructor( private route: ActivatedRoute, private productservice: ProductService ) { }

    ngOnInit() {
        let id =+ this.route.snapshot.params['id'];

        this.productservice.GetProductbyID(id).subscribe(result => this.product = result);
  }

}
