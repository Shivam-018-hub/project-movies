
import Comp from './comp.jsx'
import Error from './Error.jsx'
import Sec from './SecPage.jsx'

import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
   <>     
    <Routes>
    
        <Route path='/' element={ <Comp /> }/>
        <Route path='/movie/:id' element={ <Sec/> }/>
        <Route path='*' element={ <Error/> }/>
    </Routes>

    </>

  )
}

export default App
