import React, { useContext } from 'react'
import Context1 from '../context/ContextFile';

function HomePage() {
  const a = useContext(Context1)
  return (
    <div>HomePage {a.class} </div>
  )
}

export default HomePage;