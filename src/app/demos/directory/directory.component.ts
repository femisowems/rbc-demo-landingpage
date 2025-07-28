import { Component } from '@angular/core'
import { TopNavbarComponent } from '../../components/top-navbar/top-navbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { LatestDirectoryComponent } from './components/latest-directory/latest-directory.component'
import { StepsComponent } from './components/steps/steps.component'
import { CtaComponent } from './components/cta/cta.component'
import { TestimonialComponent } from './components/testimonial/testimonial.component'
import { BlogsComponent } from './components/blogs/blogs.component'
import { FooterComponent } from '../../components/footer/footer.component'

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [
    TopNavbarComponent,
    HeroComponent,
    LatestDirectoryComponent,
    StepsComponent,
    CtaComponent,
    TestimonialComponent,
    BlogsComponent,
    FooterComponent,
  ],
  templateUrl: './directory.component.html',
  styles: ``,
})
export class DirectoryComponent {
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
      label: 'Testimonials',
      link: '#testimonial',
    },
    {
      label: 'Blog',
      link: '#blog',
    },
  ]
}
