import { useCallback, useEffect, useRef } from 'react'

export function useThrottle (callback: (...args: any[]) => void, delay: number): () => void {
  const throttleRef = useRef<null | boolean>(null)
  const throttleTimeout = useRef<ReturnType<typeof setInterval> | null>(null)
  const throttledCallback = useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args)
      throttleRef.current = true
      throttleTimeout.current = setTimeout(() => {
        throttleRef.current = false
      }, delay)
    }
  }, [delay, callback])

  useEffect(() => {
    return () => {
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current)
      }
    }
  }, [])
  return throttledCallback
}
