import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-page',
  standalone: true,
  templateUrl: './header-page.component.html',
  imports: [RouterModule]
})
export class HeaderPageComponent {
  @Input({ required: true }) title: string = "";
  @Input({ required: true }) description: string = "";
  @Input({ required: true }) btnTitle: string = "";
  @Input({ required: true }) pathname: string = "";
}
