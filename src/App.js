import { Navbar,NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <div className="container">
          <NavbarBrand href="/">
            Nanonets
          </NavbarBrand> 
        </div>

      </Navbar>
    </div>
  );
}

export default App;
