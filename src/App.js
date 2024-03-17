import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import routes from './routes';
import Footer from './pages/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Footer />
      <div className="container mt-4">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
        
      </div>
    </Router>
  );
};
=======
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
>>>>>>> 9588a92c0dc3b7fcab423b42a6701dd633ea375e

export default App;