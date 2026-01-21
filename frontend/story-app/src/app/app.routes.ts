// src/app/app.routes.ts
import { HomeComponent } from './pages/home/home.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'admin', component: AdminComponent }
];
