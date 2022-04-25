import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import GetDate from './components/GetDate'
import ModalName from './components/ModalName'
import Button from './components/Button'
import Popup from './components/Popup'
import TodosContainer from './components/TodosContainer'
import useLocalStorage from './hooks/useLocalStorage'
import Spinner from './components/Spinner'

const App = () => {
  const { item: nombre, saveItem: saveName, loading, error } = useLocalStorage(
    'nombre',
    ''
  )
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <>
      {error && <p>Hubo un error</p>}
      {loading && <Spinner />}
      {!loading &&
        (nombre === '' ? (
          <div className='container__first-modal'>
            <Button
              onClick={() => setButtonPopup(true)}
              children='Ingresa tu nombre'
            />
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <ModalName setTrigger={setButtonPopup} setNombre={saveName} />
            </Popup>
          </div>
        ) : (
          <Layout>
            <Header nombre={nombre} />
            <GetDate />
            <TodosContainer />
          </Layout>
        ))}
    </>
  )
}

export default App
