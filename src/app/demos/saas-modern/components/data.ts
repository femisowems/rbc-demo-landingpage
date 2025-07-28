import type { PricingPlanType, TeamMemberType } from './types'

export const pricingPlans: PricingPlanType[] = [
  {
    name: 'Basic Plan',
    monthlyPrice: 8,
    yearlyPrice: 28,
    features: [
      { icon: 'check', name: '10 users' },
      { icon: 'check', name: '50 GB storage' },
      { icon: 'check', name: 'Front plan features' },
      { icon: 'check', name: '100 apps' },
      { icon: 'times', name: 'Product support' },
      { icon: 'times', name: 'Advanced security' },
      { icon: 'times', name: 'Free subdomain' },
    ],
  },
  {
    name: 'Business Plan',
    monthlyPrice: 18,
    yearlyPrice: 48,
    features: [
      { icon: 'check', name: '10 users' },
      { icon: 'check', name: '50 GB storage' },
      { icon: 'check', name: 'Front plan features' },
      { icon: 'check', name: '100 apps' },
      { icon: 'check', name: 'Product support' },
      { icon: 'check', name: 'Advanced security' },
      { icon: 'times', name: 'Free subdomain' },
    ],
    isPopular: true,
  },
  {
    name: 'Exclusive Plan',
    monthlyPrice: 28,
    yearlyPrice: 68,
    features: [
      { icon: 'check', name: '10 users' },
      { icon: 'check', name: '50 GB storage' },
      { icon: 'check', name: 'Front plan features' },
      { icon: 'check', name: '100 apps' },
      { icon: 'check', name: 'Product support' },
      { icon: 'check', name: 'Advanced security' },
      { icon: 'check', name: 'Free subdomain' },
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
