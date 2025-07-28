import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { steps } from '../data'
import type { stepType } from '../types'

@Component({
  selector: 'directory-steps',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  templateUrl: './steps.component.html',
  styles: ``,
})
export class StepsComponent {
  steps: stepType[] = steps
}
