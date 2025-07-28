import type { Route } from '@angular/router'
import { SaasModernComponent } from './saas-modern/saas-modern.component'
import { DirectoryComponent } from './directory/directory.component'
import { EventConferenceComponent } from './event-conference/event-conference.component'
import { PaymentComponent } from './payment/payment.component'
import { RBCComponent } from './rbc-demo/rbc-demo.component'

export const DEMO_PAGES_ROUTES: Route[] = [
  {
    path: 'saas',
    component: SaasModernComponent,
    data: { title: 'Saas Modern' },
  },
  {
    path: 'directory',
    component: DirectoryComponent,
    data: { title: 'Directory' },
  },
  {
    path: 'event',
    component: EventConferenceComponent,
    data: { title: 'Event Conference' },
  },
  {
    path: 'payment',
    component: PaymentComponent,
    data: { title: 'Payment' },
  },
  {
    path: '',
    component: RBCComponent, // Assuming this is a placeholder for the RBC demo component
    data: { title: 'RBC Demo'},
  }
]
