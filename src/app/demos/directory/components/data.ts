import type {
  BlogType,
  DirectoryType,
  StatType,
  stepType,
  testimonialType,
} from './types'

export const statsData: StatType[] = [
  {
    image: 'assets/images/landing/directory/icons/restaurant.png',
    name: 'Restaurant',
    count: 255,
  },
  {
    image: 'assets/images/landing/directory/icons/place.png',
    name: "Place's",
    count: 350,
  },
  {
    image: 'assets/images/landing/directory/icons/hotels.png',
    name: "Hotel's",
    count: 180,
  },
  {
    image: 'assets/images/landing/directory/icons/shopping.png',
    name: 'Shopping',
    count: 750,
  },
  {
    image: 'assets/images/landing/directory/icons/house.png',
    name: 'House',
    count: 426,
  },
  {
    image: 'assets/images/landing/directory/icons/game.png',
    name: 'Game',
    count: 375,
  },
]

export const latestDirectories: DirectoryType[] = [
  {
    title: 'The Langham-Chicago',
    description:
      'Sed ut perspiciatis unde omnis iste natu sit us voluptatem accusantiumu as doloremque totam rem aperiam.',
    price: 49,
    avatar: 'assets/images/avatars/img-1.png',
    name: 'Gina Sanchez',
    image: 'assets/images/landing/directory/directory/1.jpg',
    rating: 4,
  },
  {
    title: 'Primland - Meadows of Dan',
    description:
      'At vero eos et accusamus et iusto dignissimos ducimus blanaitiis praesentium voluptatum.',
    price: 69,
    avatar: 'assets/images/avatars/img-2.png',
    name: 'Joseph Cohen',
    image: 'assets/images/landing/directory/directory/2.jpg',
    rating: 5,
  },
  {
    title: 'The Hay-Adams-Washington',
    description:
      'Et harum quidem rerum facilis set et expedita distinctio. Nam lidero tempore cum soluta nobis.',
    price: 69,
    avatar: 'assets/images/avatars/img-3.png',
    name: 'Aaron Johnson',
    image: 'assets/images/landing/directory/directory/3.jpg',
    rating: 4,
  },
  {
    title: 'Montage Deer Valley-Utah',
    description:
      'Nemo enim ipsam voluptatem aut odit us fugit sed quia magni dolores aut odit us fugit magni dolores.',
    price: 49,
    avatar: 'assets/images/avatars/img-4.png',
    name: 'Sharom Donato',
    image: 'assets/images/landing/directory/directory/4.jpg',
    rating: 5,
  },
  {
    title: 'The Lowell - New York',
    description:
      'Itaque earum rerum hic tenetur a sapiente ut aut reiciendis voluptatibus consequatur doloribus.',
    price: 39,
    avatar: 'assets/images/avatars/img-5.png',
    name: 'Richard Fowler',
    image: 'assets/images/landing/directory/directory/5.jpg',
    rating: 3,
  },
  {
    title: 'Four Seasons Hotel-Chicago',
    description:
      'Itaque earum rerum hic tenetur a sapiente ut aut reiciendis voluptatibus consequatur doloribus.',
    price: 89,
    avatar: 'assets/images/avatars/img-6.png',
    name: 'Jessica Swift',
    image: 'assets/images/landing/directory/directory/6.jpg',
    rating: 4,
  },
]

export const steps: stepType[] = [
  {
    icon: 'map-pin',
    title: 'Search location',
    description: 'Itaque earum a rerum tenetur a sapiente asperiores repellat.',
  },
  {
    icon: 'circle-alert',
    title: 'View Location info',
    description: 'Ut enim ad minima veniam, quis nostrum aliquid commodi.',
  },
  {
    icon: 'smartphone',
    title: 'Book or Call',
    description: 'Sed ut perspiciatis unde ominis iste natus sunt explicabo.',
  },
]

export const testimonialsData: testimonialType[] = [
  {
    avatar: 'assets/images/avatars/img-1.png',
    name: 'Deborah Shaw',
    position: 'Web Developer, USA',
    description:
      'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.',
  },
  {
    avatar: 'assets/images/avatars/img-2.png',
    name: 'Linda Young',
    position: 'Graphic Designer, USA',
    description:
      'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.',
  },
]

export const blogs: BlogType[] = [
  {
    date: '27 Aug 2021',
    title: 'Primland - Meadows of dan',
    description:
      'suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.',
    image: 'assets/images/landing/directory/directory/2.jpg',
  },
  {
    date: '31 Jan 2022',
    title: 'The Hay-Adams-Washington',
    description:
      'Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.',
    image: 'assets/images/landing/directory/directory/3.jpg',
  },
]
