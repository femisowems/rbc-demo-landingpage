import { Routes } from '@angular/router'


export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./demos/demos.route').then((mod) => mod.DEMO_PAGES_ROUTES),
  }
]
