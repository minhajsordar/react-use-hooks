// inspired from internet
import { useEffect } from 'react'

export function useDebounceEffect(
  fn,
  waitTime,
  dependencies,
) {
  useEffect(() => {
    const t = setTimeout(() => {
      fn.apply(undefined, dependencies)
    }, waitTime)

    return () => {
      clearTimeout(t)
    }
  }, dependencies || [])
}
