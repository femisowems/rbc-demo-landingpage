import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { ticketPricing } from '../data'
import { currency } from '@common/constants'

@Component({
  selector: 'event-tickets',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  templateUrl: './tickets.component.html',
  styles: ``,
})
export class TicketsComponent {
  ticketPricing = ticketPricing
  currency = currency
}
