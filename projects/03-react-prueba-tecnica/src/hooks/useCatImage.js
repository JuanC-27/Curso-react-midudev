import { useState, useEffect } from 'react'
import { getRandomCatImage } from '../services/image'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  const refreshImage = async (words) => {
    const urlImage = await getRandomCatImage(words)
    if (urlImage?.message === 'FailedToFetch') {
      setImageUrl('https://http.cat/404')
      return
    }
    setImageUrl(urlImage)
  }

  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ', 3).join(' ')
    refreshImage(firstThreeWords)
  }, [fact])

  return { imageUrl }
}
