import { Request } from 'servie'
import { finalhandler } from './index'

describe('servie-finalhandler', () => {
  it('should return a 404 response', () => {
    const req = new Request({ url: '/' })

    return finalhandler(req)().then(res => expect(res).toMatchSnapshot())
  })

  it('should not return a body when using HEAD', () => {
    const req = new Request({ url: '/', method: 'head' })

    return finalhandler(req)().then(res => expect(res).toMatchSnapshot())
  })
})
