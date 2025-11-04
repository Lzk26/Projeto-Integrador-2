import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import GamePage from './pages/GamePage';
import User from './pages/User';
import Payment from './pages/payment';
import PrivacyPolicy from './pages/PrivacyPolicy';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/jogo/:id" element={<GamePage />} />
      <Route path="/usuario" element={<User />} />
      <Route path="/pagamento" element={<Payment />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
    </Routes>
  );
};

export default Routers;
