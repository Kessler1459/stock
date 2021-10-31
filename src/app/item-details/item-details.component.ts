import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-item-details',
    templateUrl: './item-details.component.html',
    styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
    product: Product;
    edit:boolean;

    constructor(private route: ActivatedRoute, private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getByBarcode(this.route.snapshot.params["productCode"]).subscribe((prod) => this.product = prod)
    }

    toggleEdit(){
        this.edit=!this.edit;
    }
}
