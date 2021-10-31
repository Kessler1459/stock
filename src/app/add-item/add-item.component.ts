import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category, Product } from '../classes/product';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
    categories = Category;
    form: FormGroup;
    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.form = new FormGroup({
            model: new FormControl(),
            brand: new FormControl(),
            barcode: new FormControl(),
            description: new FormControl(),
            price: new FormControl(),
            category: new FormControl()
        })
    }

    onSubmit() {
        const newProd = new Product();
        newProd.model = this.form.value.model;
        newProd.brand = this.form.value.brand;
        newProd.barcode = this.form.value.barcode;
        newProd.description = this.form.value.description;
        newProd.price = this.form.value.price;
        newProd.units = 0;
        //todo imgurl?
        newProd.category = this.form.value.category;
        this.productService.addProduct(newProd);
    }

    getCategories() {
        return Object.keys(Category);
    }

}
