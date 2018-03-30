export type Genre = 'Drama' | 'Comedy' | 'Romance' | string

export type Day =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

export type Image = {
  original: string,
  medium?: string,
}

export type Person = {
  id: string,
  name: string,
  image: Image,
}

export type Actor = Person
export type Character = Person

export type Show = {
  id: string,
  name: string,
  summary: string,
  network: string,
  rating?: number,
  status:
    | { type: 'Running', scheduledDay: Day }
    | { type: 'Ended' }
    | { type: 'In Development' },
  genres: Genre[],
  image: Image,
  cast: { actor: Actor, character: Character }[] | null,
}
