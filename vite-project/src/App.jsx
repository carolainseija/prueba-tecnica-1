import React, { useEffect, useState } from 'react'

export function App () {
  // recuperar un hecho aleatorio de gatos de la primera api
  // muestra una imagen de un gato  con la primera palabra
  // https://catfact.ninja/fact => url text
  // https://cataas.com/cat/says/hello => url image

  const [fact, setFact] = useState('value initial')
  // mostrar datos

  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  // const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ')[0]
        console.log('fist:', firstWord)

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(response => console.log('res', response))
      })
  }, [])

  return (
    <>
      <p>{fact}</p>
    </>
  )
}
