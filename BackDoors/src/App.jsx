import './App.css';
import Topo from './components/Topo';
import Footer from './components/Footer';
import Routers from './Routers';

function App() {
  return (
    <div className="app-root">
      <Topo />
      <main className="app-main">
        <Routers />
      </main>
      <Footer />
    </div>
  );
}

export default App;
