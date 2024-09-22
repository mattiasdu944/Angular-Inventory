import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { SimpleProduct } from '../../interfaces/simple-product';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent implements OnInit {
  private productsService = inject(ProductsService)

  public product = signal<SimpleProduct | null>(null); 

  ngOnInit(): void {
    this.loadProduct()
  }


  public loadProduct() {
    this.productsService.findOne("producto-2")
      .subscribe(product => {
        this.product.set(product)
      })
  }

}
