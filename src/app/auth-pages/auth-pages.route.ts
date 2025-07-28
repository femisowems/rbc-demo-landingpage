import type { Route } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { LogoutComponent } from './logout/logout.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { LockScreenComponent } from './lock-screen/lock-screen.component'
import { LoginWithQrComponent } from './login-with-qr/login-with-qr.component'

export const AUTH_PAGES_ROUTES: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'qr-login',
    component: LoginWithQrComponent,
    data: { title: 'Login With Qr' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' },
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: { title: 'Logout' },
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: { title: 'Forgot Password' },
  },
  {
    path: 'lock-screen',
    component: LockScreenComponent,
    data: { title: 'Lock Screen' },
  },
]
