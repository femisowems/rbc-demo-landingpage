import { Routes } from '@angular/router'
import { AuthLayoutComponent } from '@layouts/auth-layout/auth-layout.component'
import { ExtraPagesLayoutComponent } from '@layouts/extra-pages-layout/extra-pages-layout.component'

export const routes: Routes = [
  {
    path: 'testing01',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
    data: {
      title: 'RBC Demo Landing Page for Insight Edge',
    },
  },
  {
    path: '',
    loadChildren: () =>
      import('./demos/demos.route').then((mod) => mod.DEMO_PAGES_ROUTES),
  },
  {
    path: 'testing',
    component: ExtraPagesLayoutComponent,
    loadChildren: () =>
      import('./extra-pages/extra-pages.route').then(
        (mod) => mod.EXTRA_PAGES_ROUTES
      ),
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./auth-pages/auth-pages.route').then(
        (mod) => mod.AUTH_PAGES_ROUTES
      ),
  },
]
