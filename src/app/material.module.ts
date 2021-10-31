import { NgModule } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSortModule } from "@angular/material/sort";


@NgModule({
    imports: [
        MatTableModule, 
        MatFormFieldModule, 
        MatSelectModule, 
        MatPaginatorModule, 
        MatInputModule, 
        MatButtonModule, 
        MatSortModule
    ],
    exports: [
        MatTableModule, 
        MatFormFieldModule, 
        MatSelectModule, 
        MatPaginatorModule, 
        MatInputModule, 
        MatButtonModule, 
        MatSortModule
    ],
    providers: [
    ]
})

export class AngularMaterialModule { }