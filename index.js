import { DateTime } from 'luxon'
import env from 'dotenv'

addEventListener('fetch', event => {
  // const latitude = window.position.coords.latitude
  // const longitude = window.position.coords.longitude

  env.config()

  const locationiqUrl = `https://eu1.locationiq.com/v1/search.php?key=${API_KEY}&q=Lebedyn&format=json`
  console.log(process.env.API_LAYER_KEY)

  const today = DateTime.now().toString()
  const data = {
    hello: `Hello worker on ${today}! Latitude is XXX`,
  }
  // event.respondWith(handleRequest(event.request))
  const json = JSON.stringify(data, null, 2)

  return event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  //request.method
  //request.url
  //request.headers
  // console.log(request)

  const resp = await fetch('https://api.thecatapi.com/v1/breeds')
  const respJson = await resp.json()
  const today = DateTime.now()
  return new Response(respJson, {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  })
}

function geoFindMe() {
  function success(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser'
  } else {
    status.textContent = 'Locating…'
    navigator.geolocation.getCurrentPosition(success, error)
  }
}
