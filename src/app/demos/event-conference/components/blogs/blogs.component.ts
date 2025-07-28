import { Component } from '@angular/core'
import { blogs } from '../data'
import { BlogCardComponent } from '@components/blog-card/blog-card.component'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'event-blogs',
  standalone: true,
  imports: [BlogCardComponent, LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  templateUrl: './blogs.component.html',
  styles: ``,
})
export class BlogsComponent {
  blogs = blogs
}
