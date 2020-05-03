function secureParseDate(date) {
  if (date) {
    const parsedDate = new Date(date)
    if (parsedDate.toString() !== 'Invalid Date') {
      return parsedDate
    }
    return Date.now()
  } else {
    return Date.now()
  }
}

exports.secureParseDate = secureParseDate
