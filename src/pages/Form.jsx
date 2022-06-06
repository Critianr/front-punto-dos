import './form.css';
import React, { useState} from "react";
import { Link, Navigate, NavLink } from 'react-router-dom';

function Form (){
    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        ciudad:"",
        pass:""

    })
    const handleChange=e=>{
       const {name, value}=e.target;
       setData(prevState=>({
           ...prevState,
           [name]:value
       }))
       console.log(data)
      }
    //   const registData = async()=>{
    //     const registroInf = data
    //     console.log(registroInf)
    //   }

    return (
        
<section className="form">
            <form action="submit" className="form-container">
            <span>FORMULARIO DE REGISTRO</span>
                <div className="one">
                    
                    <div className="items">
                    <label htmlFor="name">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder='Nombre' name='name' onChange={handleChange} />
                    </label>    
                    </div>
                    <div className="items">
                    <label htmlFor="surname">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder='Apellido' name="surname" onChange={handleChange} />
                    </label>    
                    </div>
                    <div className="items">
                    <label htmlFor="phone">
                    <i className="fas fa-mobile-alt"></i>
                    <input type="number" placeholder='Celular' name='phone' onChange={handleChange}/>
                    </label>  
                    </div>
                    <div className='items'>
                    <label htmlFor="email">
                    <i class="fas fa-envelope"></i>                    
                    <input type="email" placeholder='Email' name='email' onChange={handleChange}/>
                    </label>
                    </div>
                    <div className='items'>
                    <label htmlFor="ciudad">
                    <i class="fas fa-map-marker-alt"></i>
                    <input type="text" placeholder='Ciudad' name='ciudad' onChange={handleChange} />
                    </label>
                    </div>
                               
                    
                    
                    <div className='gender'>
                         <label >

                        Genero
                        
                        </label>
                        <i class="fas fa-venus-mars"></i>
                    <label htmlFor="M">
                       M
                    </label>
                    <input className='letter' type="radio" onChange={handleChange} />
                    <label htmlFor="F">
                    F
                    </label>
                    <input  className='letter' type="radio" onChange={handleChange}/>

                    </div>
                    <div className="items">
                    <label htmlFor="pass">
                    <i class="fas fa-lock"></i> 
                    <input type="text" placeholder='Contraseña' name='pass' onChange={handleChange}/>
                    </label>
                    </div>
                    
                </div>
                    
{/* two */}
                    
                
<div className='btn-s'>
        <NavLink className='btn-signin' to={"/ruta-protegida"} type='button'>
            Registrarme
        </NavLink>
        </div>
                    {/* <Signin /> */}
                
                
            </form>
            
        </section>
    );

}
export {Form}