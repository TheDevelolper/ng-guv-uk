import { Component } from '@angular/core';
import { Logo } from '../../atoms/logo/logo';

@Component({
  selector: 'gov-header',
  imports: [Logo],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
