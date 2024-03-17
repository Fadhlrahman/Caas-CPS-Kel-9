import './App.css';
import Introduction from './components/introduction';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div>
        <Introduction />
        </div>
        <Footer />
        
      </header>
      <section>
        <h1>Smart Door Access and Automatic Lamp  </h1>
      </section>
    </div>
  );
}

export default App;