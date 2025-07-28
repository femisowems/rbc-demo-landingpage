import type { platformType, PricingPlanType, TeamMemberType } from './types'

export const pricingPlans: PricingPlanType[] = [
  {
    name: 'Basic Plan',
    monthlyPrice: 10,
    yearlyPrice: 0,
    features: [
      { icon: 'check', name: 'Simply sign into RBC Online Banking for business.' },
      { icon: 'check', name: 'You’ll enter into the New Banking Experience for a one-time identity confirmation.' },
      { icon: 'check', name: 'Next, you’ll automatically be sent to RBC Insight Edge.' },
      { icon: 'check', name: 'Follow the prompts to subscribe and begin using the dashboard right away.' },
    ],
  },
]

export const teamMembers: TeamMemberType[] = [
  {
    avatar: 'assets/images/avatars/img-7.png',
    userName: '@maxine',
    name: 'Maxine Gilmer',
    position: 'Web designer',
    description:
      'These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.',
  },
  {
    avatar: 'assets/images/avatars/img-3.png',
    userName: '@michael',
    name: 'Michael Ellis',
    position: 'UI/UX designer',
    description:
      'We all intend to plan ahead, but too often let the day-to-day minutia get in the way of making a calendar.',
  },
  {
    avatar: 'assets/images/avatars/img-8.png',
    userName: '@ruben',
    name: 'Ruben Gouse',
    position: 'Web developer',
    description:
      'These qualities can be combined perfectly natural. However, things like people look miserable.',
  },
  {
    avatar: 'assets/images/avatars/img-5.png',
    userName: '@francis',
    name: 'Francis Ibikunle',
    position: 'Manager',
    description:
      'These alternatives to the classic Lorem Ipsum are often amusing and tell short, funny or nonsensical stories.',
  },
]

export const paymentPlatforms: platformType[] = [
  {
    icon: 'uil-chart-pie-alt',
    title: 'Privacy Commitment',
    description:
      'We are dedicated to protecting our clients’ privacy and confidential information at all times.',
  },
  {
    icon: 'uil-unlock',
    title: 'Anonymous, Aggregated Data',
    description:
      'All data is safeguarded under strict privacy protocols to ensure security and compliance.',
  },
  {
    icon: 'uil-dollar-sign',
    title: 'Expert Insight Development',
    description:
      'The platform is powered by RBC’s deep expertise in information management and insight generation.',
  },
  {
    icon: 'uil-money-bill',
    title: 'Rigorous Privacy Standards',
    description:
      'RBC Insight Edge uses only unidentifiable, aggregated data that cannot be traced back to any individual or business.',
  },
]
