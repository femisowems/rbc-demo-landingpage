import type { Route } from '@angular/router'
import { ComingSoon1Component } from './coming-soon-1/coming-soon-1.component'
import { ComingSoon6Component } from './coming-soon-6/coming-soon-6.component'
import { ComingSoon5Component } from './coming-soon-5/coming-soon-5.component'
import { ComingSoon4Component } from './coming-soon-4/coming-soon-4.component'
import { ComingSoon3Component } from './coming-soon-3/coming-soon-3.component'
import { ComingSoon2Component } from './coming-soon-2/coming-soon-2.component'

export const EXTRA_PAGES_ROUTES: Route[] = [
  {
    path: 'coming-soon-1',
    component: ComingSoon1Component,
    data: { title: 'Coming Soon' },
  },
  {
    path: 'coming-soon-2',
    component: ComingSoon2Component,
    data: { title: 'Coming Soon' },
  },
  {
    path: 'coming-soon-3',
    component: ComingSoon3Component,
    data: { title: 'Coming Soon' },
  },
  {
    path: 'coming-soon-4',
    component: ComingSoon4Component,
    data: { title: 'Coming Soon' },
  },
  {
    path: 'coming-soon-5',
    component: ComingSoon5Component,
    data: { title: 'Coming Soon' },
  },
  {
    path: 'coming-soon-6',
    component: ComingSoon6Component,
    data: { title: 'Coming Soon' },
  },
]
