import { useEffect, useState } from 'react'

export function useMedia(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const m = window.matchMedia(query)
    const onChange = () => setMatches(m.matches)
    onChange()

    if (m.addEventListener) m.addEventListener('change', onChange)
    else m.addListener(onChange)

    return () => {
      if (m.removeEventListener) m.removeEventListener('change', onChange)
      else m.removeListener(onChange)
    }
  }, [query])

  return matches
}

