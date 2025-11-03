import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import GamePage from './pages/GamePage';
import User from './pages/User';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/jogo/:id" element={<GamePage />} />
       <Route path="/usuario" element={<User />} />
    </Routes>
  );
};

export default Routers;
