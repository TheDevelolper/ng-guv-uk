import { Component, inject, input, signal } from '@angular/core';
import { NavigationEnd, Route, Router, RouterEvent, RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { AppRoute, AppRoutes } from '../../../app.routes';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'gov-service-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './service-navigation.html',
  styleUrl: './service-navigation.scss',
})
export class ServiceNavigation {
  public items = input<AppRoutes>([]);
  public selected = signal<AppRoute | null>(null);

  private readonly router = inject(Router);

  public itemSelected(item: AppRoute) {
    this.selected.set(item);
  }

  constructor() {
    this.
    router.events.pipe(
      takeUntilDestroyed()).subscribe((value) => {
         if (value instanceof NavigationEnd) {
          (document.activeElement as HTMLElement)?.blur();
         }
    });
  }
}
