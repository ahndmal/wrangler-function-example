import { DateTime } from 'luxon'

addEventListener('fetch', event => {
  const data = {
    hello: 'world',
  }
  // event.respondWith(handleRequest(event.request))
  const json = JSON.stringify(data, null, 2)

  return event.respondWith(
    new Response(json, {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    }),
  )
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  //request.method
  //request.url
  //request.headers
  const today = DateTime.now().day
  return new Response(`Hello worker on ${today}!`, {
    headers: { 'content-type': 'text/plain' },
  })
}
