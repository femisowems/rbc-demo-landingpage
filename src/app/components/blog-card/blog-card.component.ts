import { Component, Input } from '@angular/core'
import { currency } from '@common/constants'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

type blogType = {
  title: string
  description: string
  price: number
  avatar: string
  name: string
  image: string
  rating: number
}

@Component({
  selector: 'blog-card',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  templateUrl: './blog-card.component.html',
  styles: ``,
})
export class BlogCardComponent {
  maxStars: number = 5
  currency = currency

  @Input() item: blogType = {
    avatar: '',
    description: '',
    name: '',
    image: '',
    price: 1,
    title: '',
    rating: 3,
  }
}
