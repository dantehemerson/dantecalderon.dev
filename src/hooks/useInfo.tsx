import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { getMyGithubInfo } from '../utils/requests/githubInfo'
import merge from 'object-merge-advanced'
import { get } from 'lodash'

export const useInfo = () => {
  const [info, setInfo] = useLocalStorage('info', {
    githubStatus: {
      status: '🌳 Save the planet',
      bio: 'Software Developer. ♥ for NodeJS and Typescript.',
      company: '@dantecalderon',
      contributions: 2573,
    },
    latestCommit: {
      message: 'WIP WIP WIP',
      createdAt: '2020-05-23T16:38:10Z',
      url:
        'https://github.com/dantehemerson/url-shortener/commit/b378164f3d7b6847f412f437d504ef7a6c84685c',
    },
    listening: {
      name: "Where We're Going",
      artist: 'Hans Zimmer',
      album: 'Interstellar (Original Motion Picture Soundtrack)',
      url: 'https://www.last.fm/music/Hans+Zimmer/_/Where+We%27re+Going',
      image: 'https://lastfm.freetls.fastly.net/i/u/300x300/b8365c64bec38d1f0d05d9c1367a8cb3.jpg',
      playing: false,
      scrobbles: '105',
      lastPlayingDate: '2020-12-10T02:20:44.000Z',
    },
    reading: {
      title: "I'm 52% done with The Pragmatic Programmer",
      updatedAt: '2021-02-16T04:53:13.000Z',
      url: 'https://www.goodreads.com/user_status/show/346760831',
      profileUrl: 'https://www.goodreads.com/user/show/72837965-dante-calder-n'
    },
  })

  useEffect(() => {
    const setGithubInfo = async () => {
      try {
        const newInfo = await getMyGithubInfo()
        setInfo(prevInfo =>
          merge(prevInfo, newInfo, {
            mergeBoolsUsingOrNotAnd: get(newInfo, 'listening.playing', false),
          })
        )
      } catch (err) {}
    }
    setGithubInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return info
}
