
import './App.css';
import Home from './Component/Home';
import { Link, Route,Routes} from 'react-router-dom';
import Details from './Component/Details';
import "./Component/imglogo.svg";
import Order from './Component/Order';
function App() {



  return (
    <div className="App">
    {/* <nav>
 <Link to="/">SignUp</Link>
 <Link to="/SignIN">signin</Link>
 <Link  to="/home">home</Link>
    </nav> */}
     

<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/Details' element={<Details />} />
  <Route path='/Order' element={<Order />} />
</Routes>

    </div>
  );
}

export default App;
