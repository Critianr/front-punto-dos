import {Routes, Route } from 'react-router-dom';
import { Home } from './Home.jsx';
import {Form} from './pages/Form';

export default function AppRouter(){

    return(
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/formulario"} element={<Form />} />
            {/* <Route path={"/ruta-protegida"} element={<PuntoUno />} */}
            {/* /> */}
            
        </Routes>
    )
}