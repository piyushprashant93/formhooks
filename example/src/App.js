import React from 'react'

import { useForm } from 'formhooks'
import 'formhooks/dist/index.css'

const App = () => {
  const [handleChange] = useForm()
  
  
  return <input name="test" onChange={ handleChange}/>
}

export default App
