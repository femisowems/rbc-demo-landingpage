import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

import { currentYear } from '@common/constants'
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useFactory: () => new LucideIconProvider(icons),
    },
  ],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {

  currentYear = currentYear
}
