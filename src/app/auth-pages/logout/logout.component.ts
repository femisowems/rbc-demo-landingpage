import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AuthSwiperComponent } from '../../components/auth-swiper/auth-swiper.component'

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [RouterLink, AuthSwiperComponent],
  templateUrl: './logout.component.html',
  styles: ``,
})
export class LogoutComponent {}
