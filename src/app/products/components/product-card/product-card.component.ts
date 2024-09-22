import { Component, computed, Input } from '@angular/core';
import { SimpleProduct } from '../../interfaces/simple-product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  imports: [RouterLink]
})
export class ProductCardComponent {
  
  @Input({ required: true }) 
  product!: SimpleProduct;

}
