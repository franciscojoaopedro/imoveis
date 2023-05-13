import { useState } from 'react'
import Landing from './components/landing'
import Global from './styles/Global'

function App() {
const [count, setCount] = useState(0)
  return (
    <>
    <Landing/>
    <Global/>
    </>
  )
}

export default App
