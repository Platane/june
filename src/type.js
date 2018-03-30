export type Genre = 'Drama' | 'Comedy' | 'Romance' | 'Action' | 'Crime' | string

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

export type CastItem = { actor: Actor, character: Character }

export type Show = {
  id: string,
  name: string,
  summary: string | null,
  network: string | null,
  rating: number | null,
  status:
    | { type: 'Running', scheduledDay: Day }
    | { type: 'Ended' }
    | { type: 'In Development' },
  genres: Genre[],
  image: Image | null,
  cast: CastItem[] | null,
}
