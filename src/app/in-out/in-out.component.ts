import { AfterViewInit, Component,  ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";
import { QuaggaJSResultObject } from '@ericblade/quagga2';

@Component({
    selector: 'app-in-out',
    templateUrl: './in-out.component.html',
    styleUrls: ['./in-out.component.scss']
})
export class InOutComponent implements AfterViewInit {
    barcode: string;
    product: Product | undefined;
    form: FormGroup;
    @ViewChild(BarcodeScannerLivestreamComponent)
    barcodeScanner: BarcodeScannerLivestreamComponent;
   
    constructor(private productService: ProductService) {
        this.form = new FormGroup({
            units: new FormControl()
        });
    }

    ngAfterViewInit(): void {
        this.barcodeScanner.start();
    }
    onChange() {
        if (this.barcode !== "") {
            this.productService.getByBarcode(this.barcode).subscribe(
                (prod) => {
                    if (prod) {
                        this.product = prod;
                        this.form.controls.units.setValidators([Validators.min((prod.units ?? 0) * -1)]);
                    }
                    else
                        this.product = undefined;
                }
            )
        }
        else
            this.product = undefined;

    }

    onSubmit() {
        if (this.product?.barcode) {
            this.productService.changeQuantity(this.product.barcode, this.form.controls.units.value);
            this.product.units += this.form.value.units;
            this.updateValidator();
        }
    }

    updateValidator() {
        if (this.product?.units)
            this.form.controls.units.setValidators([Validators.min(this.product.units * -1)]);
    }


    onValueChangesScanner(result: QuaggaJSResultObject) {
        this.barcode = result.codeResult.code ?? "";
        this.onChange();
    }

}
