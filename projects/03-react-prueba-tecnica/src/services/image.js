const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const getRandomCatImage = async (firstThreeWord) => {
  try {
    const response = await fetch(`https://cataas.com/cat/says/${firstThreeWord}?size=20&json=true`)
    const data = await response.json()
    const { url } = data
    console.log('dentro del try')
    return CAT_PREFIX_IMAGE_URL + url
  } catch (error) {
    return new Error('FailedToFetch')
  }
}
