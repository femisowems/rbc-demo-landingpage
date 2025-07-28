import { Component } from '@angular/core'
import { eventSchedules } from '../data'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'event-schedules',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  templateUrl: './event-schedules.component.html',
  styles: ``,
})
export class EventSchedulesComponent {
  eventSchedules = eventSchedules
}
