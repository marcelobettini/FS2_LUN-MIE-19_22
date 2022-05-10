//La API Context es stateless, o sea, no provee un método para actualizar el valor del contexto desde los componentes consumers. Podemos implementarlo integrando un mecanismo de administración de estado y proveyendo una función update en el context, junto al valor que contiene la info.

//lo primero es crear un contexto
import { createContext, useContext, useState } from 'react'
const UserContext = createContext({ userName: '', setUserName: () => { } }) //lo inicializamos y pasamos una función para actualizar el valor del estado en el context


import './App.css'
function App() {
  const [userName, setUserName] = useState('Juana Mengano')
  const value = { userName, setUserName }

  return (
    <UserContext.Provider value={value}>
      <UserNameInput />
      <UserInfo />
    </UserContext.Provider>
  )
}

function UserNameInput() {
  const { userName, setUserName } = useContext(UserContext)
  const changeHandler = (e) => setUserName(e.target.value)
  return (
    <input type="text" value={userName} onChange={changeHandler} />
  )

}
function UserInfo() {
  const { userName } = useContext(UserContext)
  return <span style={{ fontWeight: '700', backgroundColor: 'burlywood', padding: '.4em' }}>User Name is: {userName}</span>
}

export default App
