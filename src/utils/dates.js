function secureParseDate(date) {
  if (date) {
    const parsedDate = new Date(date)
    if (parsedDate.toString() !== 'Invalid Date') {
      return parsedDate
    }
    return new Date()
  } else {
    return new Date()
  }
}

exports.secureParseDate = secureParseDate
