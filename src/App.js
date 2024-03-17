import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';

import HomePg from './Pages/HomePg';
import DesAlatPg from './Pages/DesAlatPg';
import MonAlatPg from './Pages/MonAlatPg';

import "./Style/LandingPage.css"

function App() {
  return (
    <Router> {/* Use BrowserRouter as Router */}
      <div>
        <div className="myBG">
          <NavigationBar/>
          <Routes>
            <Route path='/' element={<HomePg />} />
            <Route path='/deskripsi-alat' element={<DesAlatPg />} />
            <Route path='/monitoring-alat' element={<MonAlatPg />} />
          </Routes>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;