import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

type pageType = {
  name: string
  url: string
  image: string
}

@Component({
  selector: 'app-account-pages',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './account-pages.component.html',
  styles: ``,
})
export class AccountPagesComponent {
  accountPages: pageType[] = [
    {
      name: 'Login',
      url: '/auth/login',
      image: 'assets/images/demo/auth-login.png',
    },
    {
      name: 'Login With QR',
      url: '/auth/qr-login',
      image: 'assets/images/demo/auth-qr-login.png',
    },
    {
      name: 'Sign Up',
      url: '/auth/register',
      image: 'assets/images/demo/auth-register.png',
    },
    {
      name: 'Logout',
      url: '/auth/logout',
      image: 'assets/images/demo/auth-logout.png',
    },
    {
      name: 'Forgot Password',
      url: '/auth/forgot-password',
      image: 'assets/images/demo/auth-forgotpw.png',
    },
    {
      name: 'Lock Screen',
      url: '/auth/lock-screen',
      image: 'assets/images/demo/auth-lock-screen.png',
    },
  ]
}
