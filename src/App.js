import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import "./App.css";
import CustomerStories from "./components/CustomerStories";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar">
        <div className="container ">
          <NavbarBrand href="/">Nanonets</NavbarBrand>
        </div>
      </Navbar>

      <Header />
      <CustomerStories/>
    </div>
  );
}

export default App;
