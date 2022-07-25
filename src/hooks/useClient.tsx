import { useState, useEffect } from 'react'

export const useIsClient = () => {
  const [isClient, setClient] = useState(false)
  const key = isClient ? 'client' : 'server'

  useEffect(() => {
    setClient(true)
  }, [])

  return { isClient, key }
}
