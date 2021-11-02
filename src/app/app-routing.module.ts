import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { InOutComponent } from './in-out/in-out.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProvidersListComponent } from './providers-list/providers-list.component';

const routes: Routes = [
    { path: "items", component: ProductListComponent },
    { path: "items/details/:productCode", component: ItemDetailsComponent },
    { path: "", redirectTo: "items", pathMatch: "full" },
    { path: "items/add", component: AddItemComponent },
    { path: "in-out", component: InOutComponent },
    { path: "providers", component: ProvidersListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
