import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import GetDate from './components/GetDate'

import ModalName from './components/ModalName'
import Button from './components/Button'
import Popup from './components/Popup'
import TodosContainer from './components/TodosContainer'

const App = () => {
  const [nombre, setNombre] = useState('')
  const [buttonPopup, setButtonPopup] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('nombre')) {
      setNombre(localStorage.getItem('nombre'))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('nombre', nombre)
  }, [nombre])

  return nombre === '' ? (
    <div className='container__first-modal'>
      <Button
        onClick={() => setButtonPopup(true)}
        children='Ingresa tu nombre'
      />
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <ModalName setTrigger={setButtonPopup} setNombre={setNombre} />
      </Popup>
    </div>
  ) : (
    <Layout>
      <Header nombre={nombre} />
      <GetDate />
      <TodosContainer />
    </Layout>
  )
}

export default App
