import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { getMyGithubInfo } from '../helpers/requests/githubInfo'
import { mergeAdvanced } from 'object-merge-advanced'

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
      profileUrl: 'https://www.goodreads.com/user/show/72837965-dante-calder-n',
    },
  })

  useEffect(() => {
    const loadGithubInfo = async () => {
      console.log('Loading Github info')
      try {
        const newInfo = await getMyGithubInfo()
        console.log('🤫 Dante ➤ loadGithubInfo ➤ newInfo', newInfo)
        setInfo(prevInfo =>
          mergeAdvanced(prevInfo, newInfo, {
            mergeBoolsUsingOrNotAnd: newInfo?.listening?.playing ?? false,
          })
        )
        console.log('Set info', info)
      } catch (error) {
        console.error('Error loading info', error)
      }
    }

    const intervalId = setInterval(() => loadGithubInfo(), 10000)

    return () => {
      console.log('Clearing interval')
      clearInterval(intervalId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return info
}
