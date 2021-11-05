import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Category, Product } from '../classes/product';
import { Provider } from '../classes/provider';
import { ProductService } from '../services/product.service';
import { ProviderService } from '../services/provider.service';

@Component({
    selector: 'app-item-edit',
    templateUrl: './item-edit.component.html',
    styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
    @Input()
    product: Product;
    @Output()
    toggleEdit = new EventEmitter<void>();
    categories = Category;
    form: FormGroup;
    providers: Provider[];

    constructor(private productService: ProductService, private providerService: ProviderService) { }

    ngOnInit(): void {
        this.providerService.getAll().subscribe(provs => this.providers = provs);
        this.form = new FormGroup({
            model: new FormControl(this.product.model),
            brand: new FormControl(this.product.brand),
            barcode: new FormControl(this.product.barcode),
            description: new FormControl(this.product.description),
            price: new FormControl(this.product.price),
            category: new FormControl(this.product.category),
            provider: new FormControl(this.product.provider),
            serviceLevel: new FormControl(this.product.serviceLevel),
            prepareCost: new FormControl(this.product.prepareCost),
            storageCost: new FormControl(this.product.storageCost)
        })
    }//todo ACA

    onSubmit() {
        this.product.model = this.form.value.model;
        this.product.brand = this.form.value.brand;
        this.product.barcode = this.form.value.barcode;
        this.product.description = this.form.value.description;
        this.product.price = this.form.value.price;
        this.product.category = this.form.value.category;
        this.product.provider = this.form.value.provider;
        this.product.serviceLevel = this.form.value.serviceLevel;
        this.product.prepareCost = this.form.value.prepareCost;
        this.product.storageCost = this.form.value.storageCost;
        this.productService.editProduct(this.product);
        this.toggleEdit.emit();
    }

    getCategories() {
        return Object.keys(Category);
    }

    compareProvider(option:Provider,value:Provider){
        return option.id ===value.id;
    }
}
