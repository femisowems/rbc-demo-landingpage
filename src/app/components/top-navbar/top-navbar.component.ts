import { CommonModule } from '@angular/common'
import {
  Component,
  HostListener,
  Input,
  ViewChild,
  Inject,
  PLATFORM_ID,
  type AfterViewInit,
  type ElementRef,
} from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import Gumshoe from 'gumshoejs'

import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { LogoBoxComponent } from '../logo-box.component'
@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, LogoBoxComponent],
  templateUrl: './top-navbar.component.html',
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  styles: ``,
})
export class TopNavbarComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  navSticky = false

  @Input() linkList: { label: string; link: string }[] | undefined
  @Input() isDark?: boolean

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (document.querySelector('.navbar-nav a')) new Gumshoe('.navbar-nav a')
    }
  }

  scrollToSection(event: Event, link: string) {
    event.preventDefault()
    if (isPlatformBrowser(this.platformId)) {
      const targetId = link.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  @ViewChild('homenavbar') navbarRef!: ElementRef

  @HostListener('window:scroll')
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.navbarRef) {
        const scrollY = window.scrollY || window.pageYOffset
        if (scrollY >= 50) {
          this.navSticky = true
        } else {
          this.navSticky = false
        }
      }
    }
  }
}
