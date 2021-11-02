import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { AngularMaterialModule } from './material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { InOutComponent } from './in-out/in-out.component';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { AddProviderComponent } from './add-provider/add-provider.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        NavBarComponent,
        ItemDetailsComponent,
        ItemEditComponent,
        AddItemComponent,
        InOutComponent,
        ProvidersListComponent,
        AddProviderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AngularMaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
