import Card from '../FirstPage/Card.jsx'
import Nav from '../FirstPage/nav.jsx'
import { moviesData } from '../pages/movie'


import '../App.css'




function Comp() {


  return (

    <>

      <Nav />
      <main className="main-container">

        <div className="movie-grid">
          {moviesData.map((elem) => {
            return (
              <Card
                elem={elem}
                key={elem.id}
              />)
          })}
        </div>
      </main>
    </>
  )
}

export default Comp;

