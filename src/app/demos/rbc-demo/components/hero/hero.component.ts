import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'saas-hero',
  standalone: true,
  imports: [LucideAngularModule],
    providers: [
      {
        provide: LUCIDE_ICONS,
        multi: true,
        useFactory: () => new LucideIconProvider(icons),
      },
    ],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
