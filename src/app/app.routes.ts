import { Route } from '@angular/router';
import { AboutMe } from './components/pages/about-me/about-me';
import { DownloadResume } from './components/pages/download-resume/download-resume';

export const routes: AppRoutes = [
    {
        navLabel: "About Me",
        path: 'about-me',
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
      navLabel: string
}