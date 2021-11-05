import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { Stat } from '../classes/stat';

@Component({
    selector: 'app-item-details',
    templateUrl: './item-details.component.html',
    styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
    barcode: string;
    product: Product;
    edit: boolean;
    stat: Stat;

    constructor(private route: ActivatedRoute, private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getByBarcode(this.route.snapshot.params["productCode"])
            .subscribe((prod) => {
                this.product = prod;
                prod.id ?
                    this.productService.getStats(prod.id)
                        .subscribe(stat => this.stat = stat) : new Stat();
            })
    }

    toggleEdit() {
        this.edit = !this.edit;
    }
}
