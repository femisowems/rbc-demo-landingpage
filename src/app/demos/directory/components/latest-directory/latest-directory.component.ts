import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { latestDirectories } from '../data'
import { BlogCardComponent } from '@components/blog-card/blog-card.component'

@Component({
  selector: 'app-latest-directory',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, BlogCardComponent],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  templateUrl: './latest-directory.component.html',
  styles: ``,
})
export class LatestDirectoryComponent {
  maxStars: number = 5
  latestDirectories = latestDirectories
}
