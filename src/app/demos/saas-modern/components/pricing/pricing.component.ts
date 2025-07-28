import { Component } from '@angular/core'
import { pricingPlans } from '../data'
import type { PricingPlanType } from '../types'
import { currency } from '@common/constants'

@Component({
  selector: 'pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styles: ``,
})
export class PricingComponent {
  pricingPlans: PricingPlanType[] = pricingPlans

  currency = currency

  isYearlyPrice: boolean = false

  togglePrice() {
    this.isYearlyPrice = !this.isYearlyPrice
  }
}
