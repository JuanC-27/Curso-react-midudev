import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export default function app () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  return (
    <main>
      <header>
        <h1>App de gatos</h1>
        <button onClick={() => refreshFact()} disabled={!imageUrl}>Get new fact</button>
      </header>

      <section>
        {fact && <p>{fact}</p>}
        {imageUrl ? <img src={imageUrl} alt='A cat image generated' /> : <span className='loader' />}
      </section>
    </main>
  )
}
