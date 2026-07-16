import Card from './FirstPage/Card.jsx'
import Nav from './FirstPage/nav.jsx'
import Comp from './comp.jsx'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      
    <div className='Parent'>
    <Route path='/SecPage.jsx'       element ={<Comp/>}/>
      
    </div>
    </Routes>
    </BrowserRouter>
  )
}

export default App
