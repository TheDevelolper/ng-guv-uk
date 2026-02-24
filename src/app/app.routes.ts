import { Route } from '@angular/router';
import { DownloadResume } from './components/pages/download-resume/download-resume';
import { AboutMe } from './components/pages/about-me/about-me';

export const routes: AppRoutes = [
    {
        path: '',
        component: AboutMe
    },
    {
        navLabel: "My Resume",
        path: 'download-resume',
        component: DownloadResume
    }
];

export type AppRoutes = AppRoute[];
export type AppRoute = Route & {
      navLabel?: string
}