import Card from './FirstPage/Card.jsx'
import Nav from './FirstPage/nav.jsx'
import Comp from './comp.jsx'
import Error from './Error.jsx'
import Sec from './SecPage.jsx'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {


  return (


    <Routes>
        <Route path='/' element={ <Comp /> }/>
        <Route path='/movie/:id' element={ <Sec/> }/>
        <Route path='*' element={ <Error/> }/>
    </Routes>

  )
}

export default App
