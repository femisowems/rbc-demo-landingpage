import { CommonModule } from '@angular/common'
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      id="back-to-top"
      (click)="scrollToTop()"
      *ngIf="isVisible"
      class="fixed bottom-5 end-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-center text-xl text-primary"
    >
      <i class="uil uil-arrow-up text-base"></i>
    </button>
  `,
  styles: ``,
})
export class BackToTopComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  isVisible = false

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isVisible = window.scrollY > 500
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
