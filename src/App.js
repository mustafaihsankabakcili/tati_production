import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;
