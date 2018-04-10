import { Request, Response, createHeaders } from 'servie'
import { createBody } from 'servie/dist/body/universal'

export function finalhandler (req: Request) {
  return async function (): Promise<Response> {
    const statusCode = 404
    const isHead = req.method.toLowerCase() === 'head'
    const body = createBody(isHead ? undefined : `Cannot ${req.method} ${req.url}`)

    const headers = createHeaders({
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'self'"
    })

    return new Response({ statusCode, headers, body })
  }
}
