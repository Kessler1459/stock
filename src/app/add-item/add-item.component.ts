import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category, Product } from '../classes/product';
import { Provider } from '../classes/provider';
import { ProductService } from '../services/product.service';
import { ProviderService } from '../services/provider.service';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
    categories = Category;
    providers: Provider[];
    form: FormGroup;
    constructor(private productService: ProductService, private providerService: ProviderService, private router:Router) { }

    ngOnInit(): void {
        this.providerService.getAll().subscribe(providers => this.providers = providers)
        this.form = new FormGroup({
            model: new FormControl(),
            brand: new FormControl(),
            barcode: new FormControl(),
            description: new FormControl(),
            price: new FormControl(),
            category: new FormControl(),
            provider: new FormControl(),
            serviceLevel: new FormControl(),
            prepareCost:new FormControl(),
            storageCost:new FormControl()
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
        newProd.category = this.form.value.category;
        newProd.provider= this.form.value.provider.id;
        newProd.serviceLevel=this.form.value.serviceLevel/100;
        newProd.prepareCost=this.form.value.prepareCost;
        newProd.storageCost=this.form.value.storageCost;
        this.productService.addProduct(newProd);
        this.router.navigate(["items"]);
    }

    getCategories() {
        return Object.keys(Category);
    }

}
