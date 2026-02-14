import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';



appConfig.providers.push({provide: APP_BASE_HREF, useValue: '/ng-guv-uk/'});

  bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
