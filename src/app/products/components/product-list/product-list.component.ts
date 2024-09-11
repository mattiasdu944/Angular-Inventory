import { Component, Input } from '@angular/core';
// import { MatGridList } from '@angular/material/grid-list';
import { ProductCardComponent } from "../product-card/product-card.component";
import { SimpleProduct } from '../../interfaces/simple-product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ ProductCardComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
    
  @Input({ required: true }) 
  products!: SimpleProduct[];

}
