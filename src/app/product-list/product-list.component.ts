import { Product } from '../classes/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from "../services/product.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from '@angular/router';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
    productList: Product[] = [];
    displayedColumns: string[] = [ 'brand', "model", "barcode", "price", "units"];
    dataSource: MatTableDataSource<Product>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private productService: ProductService, private router: Router) { }

    ngOnInit(): void {
        this.productService.getAll().subscribe((pList) => {
            console.log(pList);
            
            this.productList = pList;
            this.dataSource = new MatTableDataSource(this.productList);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort
        });
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    onProductSelect(prod: Product) {
        this.router.navigate(["items/details/" + prod.barcode])
    }
}

