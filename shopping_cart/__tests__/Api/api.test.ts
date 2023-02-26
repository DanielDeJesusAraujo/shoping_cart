import { getAll } from '../../src/Api/Products';
import axios from 'axios';
import { RESULT_MOCK } from '../__Mocks__/Api';

describe('1_getAll function from Api',function() {
  beforeEach(() => {
    axios.get = jest.fn().mockResolvedValue({data: { results: RESULT_MOCK }})
  })
  it('deve retornar os dados corretos da api', async function() {
    const result = await getAll();

    expect(result).toEqual(RESULT_MOCK)
  })
  afterEach(jest.resetAllMocks)
})