import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-logo-box',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <a routerLink="/" class="logo">
      <img
        src="assets/images/logo-dark.png"
        class="logo-dark h-10"
        alt="Opixo Logo"
      />
      <img
        src="assets/images/logo-light.png"
        class="logo-light h-10"
        alt="Opixo Logo"
      />
    </a>
  `,
})
export class LogoBoxComponent {}
