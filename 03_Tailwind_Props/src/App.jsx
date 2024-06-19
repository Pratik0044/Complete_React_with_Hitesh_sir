import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardOne from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 rounded-xl p-3 text-black mb-4'>Tailwind Testing</h1>
    <CardOne/>
    </>
  )
}

export default App
