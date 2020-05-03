const { secureParseDate } = require('./dates')

const mockNowDate = new Date('2019-04-07T10:20:30Z')

describe('secureParseDate', () => {
  beforeAll(() => {
    global.Date.now = jest.fn(() => mockNowDate)
  })

  it('should return default value if undefined param is passed', () => {
    expect(secureParseDate()).toEqual(mockNowDate)
  })

  it('should return default for incorrect date string', () => {
    expect(secureParseDate('1920129j90j9j')).toEqual(mockNowDate)
  })

  it('should return default for empty string', () => {
    expect(secureParseDate({})).toEqual(mockNowDate)
  })

  it('should return created date', () => {
    const expectedDate = new Date('2020-05-03T00:53:52.706Z')
    expect(secureParseDate(expectedDate)).toEqual(expectedDate)
  })
})
