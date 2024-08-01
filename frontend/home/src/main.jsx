import React from 'react'
import ReactDOM from 'react-dom/client'
import Exhibicion from './components/exhibidor'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <div id="ofertas"
    className="grid grid-cols-5 p-7 gap-4 bg-(226,226,226)">
    <Exhibicion/>
    <Exhibicion/>
    <Exhibicion/>
    <Exhibicion/>
    <Exhibicion/>
    </div>
    <div className='grid grid-cols-5'>
    <Exhibicion/>
    </div>
    </>
  </React.StrictMode>,
)
