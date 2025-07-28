import { Component } from '@angular/core'
import { paymentPlatforms } from '../data'

@Component({
  selector: 'payment-platform',
  standalone: true,
  imports: [],
  templateUrl: './platform.component.html',
  styles: ``,
})
export class PlatformComponent {
  paymentPlatforms = paymentPlatforms
}
