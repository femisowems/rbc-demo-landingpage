import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

type pageType = {
  name: string
  url: string
  image: string
}

@Component({
  selector: 'app-demos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './demos.component.html',
  styles: ``,
})
export class DemosComponent {
  demoPages: pageType[] = [
    {
      name: 'Saas Modern',
      url: '/demos/saas',
      image: 'assets/images/demo/home-saas.png',
    },
    {
      name: 'Directory',
      url: '/demos/directory',
      image: 'assets/images/demo/home-directory.png',
    },
    {
      name: 'Event Conference',
      url: '/demos/event',
      image: 'assets/images/demo/home-event.png',
    },
    {
      name: 'Payment',
      url: '/demos/payment',
      image: 'assets/images/demo/home-payment.png',
    },
  ]
}
