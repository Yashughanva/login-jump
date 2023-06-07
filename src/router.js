import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Dashboard } from './dashboard';
import Signup from './signup';
import Login from './login';

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Dashboard />} />
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}