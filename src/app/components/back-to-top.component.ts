import { CommonModule } from '@angular/common'
import { Component, HostListener } from '@angular/core'

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
  isVisible = false

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 500
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
