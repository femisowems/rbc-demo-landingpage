import { Component, Input } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { faqsData } from './data'
@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  templateUrl: './faqs.component.html',
  styles: ``,
})
export class FaqsComponent {
  faqs = faqsData

  @Input() bgDark?: boolean
}
