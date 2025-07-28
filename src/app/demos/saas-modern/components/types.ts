export type PricingPlanType = {
  name: string
  monthlyPrice: number
  yearlyPrice: number
  features: {
    icon: string
    name: string
  }[]
  isPopular?: boolean
}

export type TeamMemberType = {
  avatar: string
  userName: string
  name: string
  position: string
  description: string
}
