import { DateTime } from 'luxon'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
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
