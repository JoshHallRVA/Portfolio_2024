
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import AppHeader from './components/header';

function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
    </div>
  );
}

export default App;
