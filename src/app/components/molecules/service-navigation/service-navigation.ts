import { Component, input, signal } from '@angular/core';
import { Route, RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { AppRoute, AppRoutes } from '../../../app.routes';

@Component({
  selector: 'gov-service-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './service-navigation.html',
  styleUrl: './service-navigation.scss',
})
export class ServiceNavigation {
  public items = input<AppRoutes>([]);
  public selected = signal<AppRoute | null>(null);

  public itemSelected(item: AppRoute) {
    this.selected.set(item);
  }
}
