import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'contact-us',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useFactory: () => new LucideIconProvider(icons),
    },
  ],
  templateUrl: './contact-us.component.html',
  styles: ``,
})
export class ContactUsComponent {}
