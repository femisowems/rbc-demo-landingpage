import { Component } from '@angular/core'
import { eventSpeakers } from '../data'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'event-speakers',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  templateUrl: './speakers.component.html',
  styles: ``,
})
export class SpeakersComponent {
  eventSpeakers = eventSpeakers
}
