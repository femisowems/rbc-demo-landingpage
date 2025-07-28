import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Footer2Component } from '@components/footer2/footer2.component'

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterModule, Footer2Component],
  templateUrl: './auth-layout.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthLayoutComponent {}
