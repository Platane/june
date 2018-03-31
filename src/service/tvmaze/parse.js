import type { Show, Actor, Character } from 'type'

// remove b, i and p tags
// /!\ does not support tag escapement ( <p> "</p>" </p> )
//     which should not be an issue for this project
const removeHtmlTag = text =>
  text
    // remove b tag
    .replace(/\<b\>(.*?)\<\/b\>/g, (_, x) => x)
    // remove i tag
    .replace(/\<i\>(.*?)\<\/i\>/g, (_, x) => x)
    // replace p tag with \n
    .replace(/\<p\>(.*?)\<\/p\>/g, (_, x) => '\n' + x)

    // trim \n
    .split('\n')
    .filter(Boolean)
    .join('\n')

// pathetic attempt to prevent XSS injection
const removeScriptTag = text => (text.includes('<script') ? null : text)

const parseStatus = ({ status, schedule }) => {
  switch (status) {
    case 'Running':
      return {
        type: 'Running',
        scheduledDays: schedule.days || [],
      }

    case 'In Development':
      return {
        type: 'In Development',
      }

    default:
    case 'Ended':
      return {
        type: 'Ended',
      }
  }
}

export const parseShow = (x: Object): Show => ({
  id: x.id.toString(),
  name: x.name,
  network: (x.network && x.network.name) || null,
  summary: (x.summary && removeScriptTag(removeHtmlTag(x.summary))) || null,
  rating:
    x.rating && isFinite(+x.rating.average) ? +x.rating.average / 10 : null,
  status: parseStatus(x),
  genres: x.genres || [],
  image: x.image || null,
  cast: null,
})

export const parseCast = (
  x: Object
): { actor: Actor, character: Character } => ({
  actor: {
    id: x.person.id.toString(),
    name: x.person.name,
    image: x.person.image,
  },
  character: {
    id: x.character.id.toString(),
    name: x.character.name,
    image: x.character.image,
  },
})
