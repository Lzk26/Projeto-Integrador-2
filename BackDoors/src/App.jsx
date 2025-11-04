import './App.css';
import { useLocation } from 'react-router-dom';
import Topo from './components/Topo';
import Footer from './components/Footer';
import Routers from './Routers';

function App() {
  const location = useLocation();
  const isUserPage = location.pathname === '/usuario';

  return (
    <div className="app-root">
      {!isUserPage && <Topo />}

      <main className="app-main">
        <Routers />
      </main>

      <Footer />
    </div>
  );
}

export default App;
