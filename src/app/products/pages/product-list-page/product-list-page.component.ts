import { Component, inject, OnInit, signal } from '@angular/core';
import { HeaderPageComponent } from "../../../shared/components/header-page/header-page.component";
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { ProductsService } from '../../services/products.service';
import { SimpleProduct } from '../../interfaces/simple-product';

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [HeaderPageComponent, ProductListComponent],
  templateUrl: './product-list-page.component.html',
})
export class ProductListPageComponent implements OnInit{

  private productsService = inject(ProductsService);

  public products = signal<SimpleProduct[]>([])

  ngOnInit(): void {
    this.loadProducts();
  }

  public loadProducts(page = 0){
    this.productsService.findAll(page)
      .subscribe( products => { 
        this.products.set(products) 
      })
  }

}
