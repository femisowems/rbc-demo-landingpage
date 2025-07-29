import type { Route } from '@angular/router';
import { RBCComponent } from './rbc-demo/rbc-demo.component';

export const DEMO_PAGES_ROUTES: Route[] = [
  {
    path: '',
    component: RBCComponent, // Assuming this is a placeholder for the RBC demo component
    data: { title: 'RBC Demo'},
  }
]
