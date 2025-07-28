import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AuthSwiperComponent } from '../../components/auth-swiper/auth-swiper.component'

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink, AuthSwiperComponent],
  templateUrl: './forgot-password.component.html',
  styles: ``,
})
export class ForgotPasswordComponent {}
