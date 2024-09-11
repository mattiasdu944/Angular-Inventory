import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from './shared/components/nav-menu/nav-menu.component';
import { SearchProductInputComponent } from "./products/components/search-product-input/search-product-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenuComponent, SearchProductInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-inventory';
}
