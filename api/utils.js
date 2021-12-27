function apiChange(url, query) {
  return url.replace('breeds', query)
}

function concat(origin) {
  return origin.concat('/v2')
}

export { apiChange, concat }
