import { CommonModule } from '@angular/common'
import {
  Component,
  HostListener,
  Input,
  ViewChild,
  type AfterViewInit,
  type ElementRef,
} from '@angular/core'
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
  navSticky = false

  @Input() linkList: { label: string; link: string }[] | undefined
  @Input() isDark?: boolean

  ngAfterViewInit() {
    if (document.querySelector('.navbar-nav a')) new Gumshoe('.navbar-nav a')
  }

  scrollToSection(event: Event, link: string) {
    event.preventDefault()
    const targetId = link.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  @ViewChild('homenavbar') navbarRef!: ElementRef

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
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
