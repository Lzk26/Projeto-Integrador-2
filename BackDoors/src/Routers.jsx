import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='*' element={<div>Página não encontrada</div>}/>
        </Routes>
    )
}

export default Routers;
