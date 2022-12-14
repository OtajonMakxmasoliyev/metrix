import logo from './logo.svg';
import './App.css';
import Form from './pages/Form';
import "./style/style.scss"
import Navbar from './components/Navbar';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import Api from './components/api';
import OrderSummary from './components/OrderSummary';

function App() {


  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Form />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter> */}

      <OrderSummary />
    </div>
  );
}

export default App;
