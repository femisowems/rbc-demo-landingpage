import { Component } from '@angular/core'
import { TopNavbarComponent } from '../../components/top-navbar/top-navbar.component'
import { HeroComponent } from './components/hero/hero.component'
import { AboutComponent } from './components/about/about.component'
import { ScheduleComponent } from './components/schedule/schedule.component'
import { SpeakersComponent } from './components/speakers/speakers.component'
import { TicketsComponent } from './components/tickets/tickets.component'
import { EventSchedulesComponent } from './components/event-schedules/event-schedules.component'
import { BlogsComponent } from './components/blogs/blogs.component'
import { FooterComponent } from '../../components/footer/footer.component'

@Component({
  selector: 'app-event-conference',
  standalone: true,
  imports: [
    TopNavbarComponent,
    HeroComponent,
    AboutComponent,
    ScheduleComponent,
    SpeakersComponent,
    TicketsComponent,
    EventSchedulesComponent,
    BlogsComponent,
    FooterComponent,
  ],
  templateUrl: './event-conference.component.html',
  styles: ``,
})
export class EventConferenceComponent {
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
      label: 'Schedule',
      link: '#schedule',
    },
    {
      label: 'Speakers',
      link: '#speakers',
    },
    {
      label: 'Pricing',
      link: '#price',
    },
    {
      label: 'Blog',
      link: '#blog',
    },
  ]
}
