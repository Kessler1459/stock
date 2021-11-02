import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { map } from "rxjs/operators"

@Component({
    selector: 'app-item-details',
    templateUrl: './item-details.component.html',
    styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
    barcode:string;
    product: Product;
    edit: boolean;

    constructor(private route: ActivatedRoute, private productService: ProductService) { }

    ngOnInit(): void {
       /* this.route.queryParams.pipe(
            map((params:ParamMap)=>params.get("productCode"))
        ).subscribe*/
        this.productService.getByBarcode(this.route.snapshot.params["productCode"]).subscribe((prod) => this.product = prod)
    }

    toggleEdit() {
        this.edit = !this.edit;
    }
}
