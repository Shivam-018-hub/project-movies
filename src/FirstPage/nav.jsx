import '../secondpage.css'
import { Link,useLocation } from "react-router-dom";
function Nav() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
    return (
        <div className="search-container">
         
            <input type="text" className="search-box" placeholder="search your favourite Movies or Webseries..."/>
             {!isHomePage &&
                (<Link to="/" className="back-btn" >
                    ⬅ Back
                </Link>)
            }
        </div>

    )
}
export default Nav;