import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import About from 'pages/About/About';
import Home from 'pages/Home/Home';
import FicheLogement from "pages/FicheLogement/FicheLogement";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/logement/:id" element={<FicheLogement />} />
                <Route path="*" element={<Error />} />
            </Routes> 
            <Footer />
    </BrowserRouter>
  </React.StrictMode>

);
reportWebVitals();
