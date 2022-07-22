import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    console.log('Loading local storage')
    try {
      const item = window.localStorage.getItem(key)
      console.log('Loadin item', item)
      return item ? JSON.parse(item) : initialValue
      console.log('Parsed item', item)
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      console.log('Setting value', valueToStore)
      setStoredValue(valueToStore)
      console.log('Storing value', valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
