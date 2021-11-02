import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Product } from './../classes/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    rootUrl = "http://localhost:8080/";

    constructor(private http: HttpClient) { }

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(this.rootUrl + "products");
    }

    getByBarcode(barcode: string) {
        return this.http.get<Product>(this.rootUrl + "products/barcode/" + barcode);
    }

    editProduct(prod: Product) {
        console.log(" editado " + JSON.stringify(prod));

    }

    addProduct(prod: Product) {
        return this.http.post(this.rootUrl + "products", prod).subscribe((res)=>console.log(res));
    }

    changeQuantity(barcode: string, value: any) {
        return this.http.post(this.rootUrl + "movements", { barcode, quantity: value });
    }
}
