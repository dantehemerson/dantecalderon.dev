import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { getMyGithubInfo } from '../utils/requests/githubInfo'

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
  })

  useEffect(() => {
    const setGithubInfo = async () => {
      try {
        const newInfo = await getMyGithubInfo()
        setInfo(prevInfo => ({
          ...prevInfo,
          ...newInfo,
        }))
      } catch (err) {}
    }
    setGithubInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return info
}
