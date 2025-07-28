import { Component } from '@angular/core'
import { TopNavbarComponent } from '../../components/top-navbar/top-navbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { AboutComponent } from './components/about/about.component'
import { FeaturesComponent } from './components/features/features.component'
import { PlatformComponent } from './components/platform/platform.component'
import { FaqsComponent } from '../../components/faqs/faqs.component'
import { FooterComponent } from '../../components/footer/footer.component'

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    TopNavbarComponent,
    HeroComponent,
    AboutComponent,
    FeaturesComponent,
    PlatformComponent,
    FaqsComponent,
    FooterComponent,
  ],
  templateUrl: './payment.component.html',
  styles: ``,
})
export class PaymentComponent {
  navLinks = [
    {
      label: 'Home',
      link: '#home',
    },
    {
      label: 'About',
      link: '#about',
    },
    {
      label: 'Features',
      link: '#features',
    },
    {
      label: 'Platform',
      link: '#platform',
    },
    {
      label: 'Faq',
      link: '#faq',
    },
  ]
}
