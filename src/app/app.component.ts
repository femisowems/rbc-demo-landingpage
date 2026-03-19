import { Component, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'
import {
  RouterOutlet,
  Router,
  type Event,
  NavigationEnd,
} from '@angular/router'
import { IStaticMethods } from 'preline/preline'
import { BackToTopComponent } from './components/back-to-top.component'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.')
  }


  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (isPlatformBrowser(this.platformId)) {
          setTimeout(() => {
            window.HSStaticMethods.autoInit()
          }, 100)
        }
      }
    })
  }
}
