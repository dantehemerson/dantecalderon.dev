const { version } = require('./package.json')

export const onClientEntry = () => {
  /** Clear data to prevent structure errors, needs update version in package.json */
  const localVersion = localStorage.getItem('version')
  if (localVersion !== version) {
    debug('Cleaning local storage because version has updated')

    /** Removing all data */
    localStorage.clear()
    localStorage.setItem('version', version)
  }
}

function debug(...params) {
  if (process.env.NODE_ENV === 'development') {
    console.log(...params)
  }
}
