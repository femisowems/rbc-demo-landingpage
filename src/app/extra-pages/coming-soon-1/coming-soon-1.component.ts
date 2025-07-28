import { calculateTimeToEvent } from '@/app/helper/utils'
import { Component, type OnDestroy, type OnInit } from '@angular/core'
import { RouterLink } from '@angular/router'
import { interval, type Subscription } from 'rxjs'

@Component({
  selector: 'coming-soon-1',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './coming-soon-1.component.html',
  styles: ``,
})
export class ComingSoon1Component implements OnInit, OnDestroy {
  days?: number
  _hours?: number
  _minutes?: number
  _seconds?: number
  countdown: { days: number; hours: number; minutes: number; seconds: number } =
    {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  private intervalSubscription!: Subscription

  ngOnInit(): void {
    this.countdown = calculateTimeToEvent()
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.countdown = calculateTimeToEvent()
    })
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe()
  }
}
