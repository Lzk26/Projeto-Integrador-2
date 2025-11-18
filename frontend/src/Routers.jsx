import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import GamePage from "./pages/GamePage";
import User from "./pages/UserPage";
import Payment from "./pages/payment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Pedidos from "./pages/Pedidos"
import PedidoDetalhes from "./pages/PedidoDetalhes";


import AuthGuard from "./authGuard";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/Login" element={<SignIn />} />
      <Route path="/cadastrar" element={<SignUp />} />

      <Route
        path="/usuario"
        element={
          <AuthGuard>
            <User />
          </AuthGuard>
        }
      />

      <Route
        path="/pedidos"
        element={
          <AuthGuard>
            <Pedidos />
          </AuthGuard>
        }
      />

      <Route 
        path="/pedidos/:id" 
        element={
        <AuthGuard>
          <PedidoDetalhes />
        </AuthGuard>
        } 
      />

      <Route 
        path="/pagamento" 
        element={
        <AuthGuard>
          <Payment />
        </AuthGuard>
        }
      />



      <Route path="/carrinho" element={<Cart />} />
      <Route path="/jogo/:id" element={<GamePage />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
    </Routes>
  );
}
