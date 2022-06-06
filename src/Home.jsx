import './home.css';
import {NavLink} from 'react-router-dom';
import { Form } from './pages/Form';

// import Img from "./assets/img.jpg";

function Home (){
    return (
        // <div>
        <>
        <section className='main'>
            <div className='main-container'>

            
                <div className='title'> <span> Bienvenidos a la Feria Virtual</span></div>
                
                <div className='fras'><span>Registrate para vivir la experiencia virtual.</span></div>
                {/* <Signin /> */}

                {/* <div className=''> */}
        <NavLink to="/formulario" className='btn-formulario' type='button'>
            Registrarme
        </NavLink>
        {/* </div> */}
        </div>
        
                </section>
        <Form />    
        
        </>
    )

}


export {Home}