export function getQueryParams (params: OptionalRecord<string, string>): string {
  const searchParams = new URLSearchParams(window.location.search)

  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value)
    }
  })
  return `?${searchParams.toString()}`
}

/**
 * Ф-я добавления параметров строки в URL
 * @param params
 */

export function addQueryParams (params: Record<string, string>): void {
  window.history.pushState(null, '', getQueryParams(params))
  console.log()
}
