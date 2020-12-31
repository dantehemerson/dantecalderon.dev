import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)

const timeAgo = new TimeAgo('en-US')

export const secureTimeAgo = date => {
  try {
    return timeAgo.format(new Date(date))
  } catch (error) {
    return timeAgo.format(new Date())
  }
}
