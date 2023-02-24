import { useState } from 'react'
import ContextProvide from './Context/Provider'
import './App.css'
import { HomePage } from './Pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvide>
      <HomePage />
    </ContextProvide>
  )
}

export default App
