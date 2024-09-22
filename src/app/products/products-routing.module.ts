import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListPageComponent,
  },
  {
    path: 'view/:slug',
    component: ProductPageComponent
  },
  // {
  //   path: 'new',
  //   component: NewProductPageComponent
  // }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule { }
