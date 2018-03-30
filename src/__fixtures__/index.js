import type { Person, Show } from 'type'

export const persons: Person[] = [
  {
    id: '6800',
    name: 'Lauren Graham',
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_portrait/1/4960.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/1/4960.jpg',
    },
  },
  {
    id: '42656',
    name: 'Alexis Bledel',
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_portrait/5/14666.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/5/14666.jpg',
    },
  },
  {
    id: '85542',
    name: 'Rory Gilmore',
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_portrait/4/11310.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/4/11310.jpg',
    },
  },
  {
    id: '46398',
    name: 'Scott Patterson',
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_portrait/50/126420.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/50/126420.jpg',
    },
  },
]

export const shows: Show[] = [
  {
    id: '525',
    name: 'Gilmore Girls',
    genres: ['Drama', 'Comedy', 'Romance'],
    status: { type: 'Ended' },
    rating: 8.8,
    network: 'The CW',
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/4/11308.jpg',
    },
    summary:
      'Gilmore Girls is a drama centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.',
    cast: [
      { actor: persons[0], character: persons[3] },
      { actor: persons[2], character: persons[1] },
    ],
  },
  {
    id: '33320',
    name: 'Derry Girls',
    genres: ['Comedy'],
    status: { type: 'Running', scheduledDay: 'Thursday' },
    rating: 6.8,
    network: 'Channel 4',
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_portrait/141/353703.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/141/353703.jpg',
    },
    summary:
      "16-year-old Erin Quinn lives with her uncompromising mother, her long-suffering father and the fearsome ‘Granda Joe', a man whose love for his daughters and granddaughters is surpassed only by his contempt for his son-in-law.\nIt's the early 90s, and Erin is used to seeing her country on the nightly news and speaking in acronyms (The IRA, The UDA, The RUC). This is a time of armed police in armoured Land Rovers and British Army check points. But it's also the time of Murder She Wrote, The Cranberries, MJ and Lisa Marie, Doc Martens, bomber jackets, The X Files, Nirvana and Wayne's World. And while The Troubles may hang over her home town, Erin has troubles of her own",
    cast: null,
  },
  {
    id: '6771',
    name: 'The Powerpuff Girls',
    genres: ['Comedy'],
    status: { type: 'Running', scheduledDay: 'Sunday' },
    rating: 7,
    network: 'Cartoon Network',
    image: {
      medium:
        'http://static.tvmaze.com/uploads/images/medium_portrait/25/64201.jpg',
      original:
        'http://static.tvmaze.com/uploads/images/original_untouched/25/64201.jpg',
    },
    summary:
      "The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to \"fight like a girl.\"",
    cast: [],
  },
]
