import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element'
import { Autoplay, Pagination } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'

register()

@Component({
  selector: 'auth-swiper',
  standalone: true,
  imports: [SwiperDirective],
  templateUrl: './auth-swiper.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthSwiperComponent {
  swiperConfig: SwiperOptions = {
    loop: true,
    modules: [Autoplay, Pagination],
    autoplay: {
      delay: 2500,
      disableOnInteraction: !1,
    },
    pagination: {
      clickable: true,
      el: '#swiper-pagination',
    },
  }
}
