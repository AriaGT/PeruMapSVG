import React, { useState } from 'react'
import { PeruMap } from './components/peruMap/PeruMap'
import './App.css'
import { formatTite } from './utils/Helper'

const App = () => {
  const [ regionText, setRegionText ] = useState('')
  return (
    <div className='app__container'>
      <div className='map__container'>
        <PeruMap setRegionText = { setRegionText } />
      </div>
      <div className='app__info__container'>
        <h1>Mapa del Perú</h1>
        <p>Región Seleccionada: { formatTite(regionText) || 'Seleccione una región por favor' }</p>
      </div>
    </div>
    )
}

export default App