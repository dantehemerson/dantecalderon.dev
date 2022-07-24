import React, { createContext, useMemo } from 'react'
import { mergeAdvanced } from 'object-merge-advanced'
import { GLOBAL_CONTEXT_KEY } from '../../gatsby/gatsby.constants'
import { getMyGithubInfo } from '../helpers/requests/githubInfo'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { initialGlobalContext } from './initial.global.context'

export const GlobalContext = createContext(undefined)

export const ThemeProvider = ({ children }) => {
  const [info, setInfo] = useLocalStorage(GLOBAL_CONTEXT_KEY, initialGlobalContext)

  React.useEffect(() => {
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
  }, [])

  const contextValue = useMemo(() => {
    return {
      info,
      setInfo,
    }
  }, [info, setInfo])

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
}
