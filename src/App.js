import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import Calculadora from './pages/calculadora/calculadora';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path='/calculadora' Component={Calculadora} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
