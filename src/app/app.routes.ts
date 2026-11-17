import { Routes } from '@angular/router';
import { About } from './about/about';
import { Home } from './home/home';
import { Cv } from './cv/cv';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'HOME.TITLE'},
  { path: 'about', component: About, title: 'ABOUT.TITLE'},
  { path: 'cv', component: Cv, title: 'CV.TITLE'},
  { path: '**', component: NotFound, title: 'NOT_FOUND.TITLE'}
];
