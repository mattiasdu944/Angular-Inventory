import { Component } from '@angular/core';
import { SearchProductInputComponent } from "../../products/components/search-product-input/search-product-input.component";
import { NavMenuComponent } from "../../shared/components/nav-menu/nav-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [SearchProductInputComponent, NavMenuComponent, RouterOutlet],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {

}
