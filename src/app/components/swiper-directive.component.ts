import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
} from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import type { SwiperOptions } from 'swiper/types'

@Directive({
  selector: 'swiper-container',
  standalone: true,
})
export class SwiperDirective implements AfterViewInit {
  private readonly swiperElement: HTMLElement

  @Input('config') config?: SwiperOptions

  constructor(
    private el: ElementRef<HTMLElement & { initialize: () => void }>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.swiperElement = el.nativeElement
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      Object.assign(this.el.nativeElement, this.config)
      this.el.nativeElement.initialize()
    }
  }
}
