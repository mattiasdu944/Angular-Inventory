import { Component, computed, Input } from '@angular/core';
import { SimpleProduct } from '../../interfaces/simple-product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  
  @Input({ required: true }) 
  product!: SimpleProduct;

  public readonly pokemonImage = computed(
    () =>
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
        this.product.id
      }.png`
  );


}
