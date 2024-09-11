import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SimpleProduct } from '../interfaces/simple-product';
import { ProductsResponse } from '../interfaces/products-response';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);


  public findAll(page: number): Observable<SimpleProduct[]> {


    if (page !== 0) {
      --page;
    }

    page = Math.max(0, page);

    return this.http.get<ProductsResponse>(
      `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`
    )
      .pipe(
        map((resp: any) => {
          const simplePokemons: SimpleProduct[] = resp.results.map(
            (pokemon: any) => ({
              id: pokemon.url.split('/').at(-2) ?? '',
              name: pokemon.name,
            })
          );

          return simplePokemons;
        }),

        tap(console.log)
      );

  }

  public loadPokemon(id: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }



}
