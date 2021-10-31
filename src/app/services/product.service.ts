import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Product } from './../classes/product';


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = "url";

    constructor(private http: HttpClient) { }

    getAll(): Promise<Product[]> {
        return new Promise((res) => res(
            [new Product(2, "brand1", "model1", "url1", "barcode1", 4, 20,"descript1",Category.A),
            new Product(1, "barnd2", "pepejaja", "urll", "barc", 5, 32,"descript2",Category.A)])
        )
        
    }

    getByBarcode(barcode:string){
        return new Observable<Product>((subs)=>subs.next(new Product(2, "brand1", "model1aaa", "url1", "barcode1", 4, 20,"descriptttttttt",Category.A)))
    }

    editProduct(prod:Product){
        console.log(" editado " +JSON.stringify(prod) );
        
    }

    addProduct(prod:Product){
        console.log(JSON.stringify(prod));
        
    }

    changeQuantity(barcode: string, value: any) {
        console.log(barcode,value);
        
    }
}
