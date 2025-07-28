import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { footerLinks } from './data'
import { currentYear } from '@common/constants'
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  footerLinks = footerLinks
  currentYear = currentYear
}
