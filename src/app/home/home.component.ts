import { Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'
import { HeroComponent } from './components/hero/hero.component'
import { DemosComponent } from './components/demos/demos.component'
import { ExtraPagesComponent } from './components/extra-pages/extra-pages.component'
import { AccountPagesComponent } from './components/account-pages/account-pages.component'
import { TopNavbarComponent } from '../components/top-navbar/top-navbar.component'
import { FeaturesComponent } from './components/features/features.component'
import { FooterComponent } from './components/footer/footer.component'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LucideAngularModule,
    HeroComponent,
    DemosComponent,
    ExtraPagesComponent,
    AccountPagesComponent,
    TopNavbarComponent,
    FeaturesComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  navLinks = [
    { label: 'Home', link: '#home' },
    { label: 'Demo', link: '#demo' },
    { label: 'Features', link: '#features' },
  ]
}
