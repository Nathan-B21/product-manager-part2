import logo from './logo.svg';
import './App.css';
import Create from './components/Create';
import {Router, Link} from "@reach/router";
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      
      <hr/>
      <hr/>
      
      <Router>
        <Create path="/">
          <AllProducts path = "/"></AllProducts>
        </Create>
        
        <ProductDetails path = "/products/:id"></ProductDetails>
      </Router>
    </div>
  );
}

export default App;
