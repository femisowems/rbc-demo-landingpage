import { Component } from '@angular/core'
import { FaqsComponent } from '../../components/faqs/faqs.component'
import { TopNavbarComponent } from '../../components/top-navbar/top-navbar.component'
import { FeaturesComponent } from './components/features/features.component'
import { HeroComponent } from './components/hero/hero.component'
import { PricingComponent } from './components/pricing/pricing.component'
import { ServicesComponent } from './components/services/services.component'
import { TeamComponent } from './components/team/team.component'
import { FooterComponent } from '../../components/footer/footer.component'

@Component({
  selector: 'app-saas-modern',
  standalone: true,
  imports: [
    TopNavbarComponent,
    HeroComponent,
    ServicesComponent,
    FeaturesComponent,
    PricingComponent,
    TeamComponent,
    FaqsComponent,
    FooterComponent,
  ],
  templateUrl: './saas-modern.component.html',
  styles: ``,
})
export class SaasModernComponent {
  navLinks = [
    {
      label: 'Home',
      link: '#home',
    },
    {
      label: 'Service',
      link: '#service',
    },
    {
      label: 'Features',
      link: '#features',
    },
    {
      label: 'Price',
      link: '#price',
    },
    {
      label: 'Team',
      link: '#team',
    },
    {
      label: 'Faq',
      link: '#faq',
    },
  ]
}
