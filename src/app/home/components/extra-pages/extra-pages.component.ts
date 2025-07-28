import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

type pageType = {
  name: string
  url: string
  image: string
}

@Component({
  selector: 'extra-pages',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './extra-pages.component.html',
  styles: ``,
})
export class ExtraPagesComponent {
  extraPages: pageType[] = [
    {
      name: 'Coming Soon',
      url: '/coming-soon-1',
      image: 'assets/images/demo/coming-soon-1.png',
    },
    {
      name: 'Coming Soon',
      url: '/coming-soon-2',
      image: 'assets/images/demo/coming-soon-2.png',
    },
    {
      name: 'Coming Soon',
      url: '/coming-soon-3',
      image: 'assets/images/demo/coming-soon-3.png',
    },
    {
      name: 'Coming Soon',
      url: '/coming-soon-4',
      image: 'assets/images/demo/coming-soon-4.png',
    },
    {
      name: 'Coming Soon',
      url: '/coming-soon-5',
      image: 'assets/images/demo/coming-soon-5.png',
    },
    {
      name: 'Coming Soon',
      url: '/coming-soon-6',
      image: 'assets/images/demo/coming-soon-6.png',
    },
  ]
}
