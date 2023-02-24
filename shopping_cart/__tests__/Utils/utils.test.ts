import { sume } from '../../src/Utils'

describe('test', function() {
  it('deve retornar 5', function() {
    expect(sume(3, 2)).toBe(5)
  })
})