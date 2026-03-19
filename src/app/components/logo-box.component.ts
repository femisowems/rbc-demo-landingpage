import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-logo-box',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <a routerLink="/" class="logo flex items-center gap-2">
      <img
        src="assets/images/landing/rbc/rbc-logo.png"
        class="logo-dark h-12"
        alt="RBC Insight Edge Logo"
      />
      <img
        src="assets/images/landing/rbc/rbc-logo.png"
        class="logo-light h-12"
        alt="RBC Insight Edge Logo"
      />
    </a>
  `,
})
export class LogoBoxComponent {}
