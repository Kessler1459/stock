import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-in-out',
    templateUrl: './in-out.component.html',
    styleUrls: ['./in-out.component.scss']
})
export class InOutComponent implements OnInit {
    barcode: string;
    product: Product;
    units: FormControl;

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.units = new FormControl(0);
    }

    onChange() {
        this.productService.getByBarcode(this.barcode).subscribe(
            (prod) => {
                this.product = prod
                this.updateValidator()
            }
        )
    }

    onSubmit() {
        if (this.product.barcode){
            this.productService.changeQuantity(this.product.barcode, this.units.value);
            this.product.units+=this.units.value;
            this.updateValidator();
            //aca se bugea si extraes o metes varias veces seguidas jeje
        }
    }

    updateValidator(){
        if (this.product.units)
                    this.units.setValidators([Validators.min(this.product.units * -1)]);
    }

}
