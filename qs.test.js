import qs from './qs'

describe('qs', () => {
  it('sorts a list with no entries', () => {
    expect(qs([])).toEqual([])
  })
  it('sorts a list with one entry', () => {
    expect(qs([42])).toEqual([42])
  })
  it('sorts a list with several entries', () => {
    expect(qs([9,2,5,1,1,1])).toEqual([1,1,1,2,5,9])
  })
})
