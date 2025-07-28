export type ScheduleType = {
  date: string
  title: string
  sessions: {
    time: string
    description: string
  }[]
}

export type SpeakerType = {
  name: string
  avatar: string
  role: string
}

export type TicketType = {
  name: string
  avatar: string
  title: string
  price: number
  description: string
  features: {
    icon: string
    name: string
  }[]
  isPopular?: boolean
}

export type EventScheduleType = {
  day: string
  events: {
    title: string
    description: string
    date: number
  }[]
}

export type BlogType = {
  title: string
  description: string
  price: number
  avatar: string
  name: string
  image: string
  rating: number
}
