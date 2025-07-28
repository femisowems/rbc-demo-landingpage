import { Component } from '@angular/core'
import { ThirdPartyLoginComponent } from '@components/third-party-login/third-party-login.component'

@Component({
  selector: 'app-login-with-qr',
  standalone: true,
  imports: [ThirdPartyLoginComponent],
  templateUrl: './login-with-qr.component.html',
  styles: ``,
})
export class LoginWithQrComponent {}
