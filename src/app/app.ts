import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/molecules/header/header';
import { ServiceNavigation } from './components/molecules/service-navigation/service-navigation';
import { routes, AppRoutes } from './app.routes';
import { Footer } from './components/molecules/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ServiceNavigation, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected navigationItems = signal<AppRoutes>(routes);
  protected readonly serviceName = signal('Kiran Résumé');
  protected showCookieBanner = signal(true);
  protected dismissCookie(): void{
    this.showCookieBanner.set(false);
  }
}
