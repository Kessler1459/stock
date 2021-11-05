import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Category, Product } from '../classes/product';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-item-edit',
    templateUrl: './item-edit.component.html',
    styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
    @Input()
    product: Product;
    @Output()
    toggleEdit=new EventEmitter<void>();
    categories=Category;
    form:FormGroup;

    constructor(private productService:ProductService) { }

    ngOnInit(): void {
        this.form=new FormGroup({
            model:new FormControl(this.product.model),
            brand:new FormControl(this.product.brand),
            barcode:new FormControl(this.product.barcode),
            description:new FormControl(this.product.description),
            price:new FormControl(this.product.price),
            category:new FormControl(this.product.category)
        })
    }

    onSubmit(){
        this.product.model=this.form.value.model;
        this.product.brand=this.form.value.brand;
        this.product.barcode=this.form.value.barcode;
        this.product.description=this.form.value.description;
        this.product.price=this.form.value.price;
        this.product.category=this.form.value.category;
        this.productService.editProduct(this.product);
        this.toggleEdit.emit();
    }

    getCategories(){
        return Object.keys(Category);
    }
}
