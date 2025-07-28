import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { ThirdPartyLoginComponent } from '@components/third-party-login/third-party-login.component'
import { AuthSwiperComponent } from '@components/auth-swiper/auth-swiper.component'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ThirdPartyLoginComponent, RouterLink, AuthSwiperComponent],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {}
