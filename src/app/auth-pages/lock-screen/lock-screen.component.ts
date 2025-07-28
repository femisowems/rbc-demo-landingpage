import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { ThirdPartyLoginComponent } from '../../components/third-party-login/third-party-login.component'
import { AuthSwiperComponent } from '../../components/auth-swiper/auth-swiper.component'

@Component({
  selector: 'app-lock-screen',
  standalone: true,
  imports: [RouterLink, ThirdPartyLoginComponent, AuthSwiperComponent],
  templateUrl: './lock-screen.component.html',
  styles: ``,
})
export class LockScreenComponent {}
