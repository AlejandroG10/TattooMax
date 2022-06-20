import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import style from '../styles/Login.module.css'
import { useState } from 'react';

const Login = () =>{
    const [isRegistred, setIsRegistred] = useState(true);

    const changeReg = () => {
        setIsRegistred(!isRegistred);
        return isRegistred;
    }

    const iniciarSesion = () => {
        var data = {username: document.getElementById('userInicio').value, password: document.getElementById('passInicio').value}
        console.log(data)
        fetch('http://localhost:5000/users/signin', {method: 'POST', headers: {"Content-Type": "application/json",}, body: JSON.stringify(data)}).then(data => {
            if(data.ok){
                // localStorage.setItem("token", data._id);
                console.log(data);
            }
        });
    }

    const registrarse = () => {
        var data = {username: document.getElementById('userRegistro').value, fullname: document.getElementById('nameRegistro').value, password: document.getElementById('passwordRegistro').value, email: document.getElementById('emailRegistro'), telefono: document.getElementById('telRegistro')}

        fetch('http://localhost:5000/users/signup', {method: 'POST', headers: {"Content-Type": "application/json",}, body: JSON.stringify(data)})
    }
    
    return(
        <div>
            <div className={style.contenedor}>
                <Popup trigger={<button className={style.iniciaSesion}>LOGIN</button>} position="bottom right">
                    <div>
                        <div >
                        <button className={style.cambiaForm} onClick={changeReg}><b>{isRegistred ? "Registrarse" : "Inciar sesion"}</b></button>
                        </div>
                        {!isRegistred && 
                        <> 
                            <label className={style.input}>Usuario: *</label>
                            <input type="text" id="userRegistro" name="userRegistro" className={style.input}/><br/>
                            <label className={style.input}>Nombre: *</label>
                            <input type="text" id="nameRegistro" name="nameRegistro"  className={style.input}/><br/>
                            <label className={style.input}>Contraseña: *</label>
                            <input type="password" id="passRegistro" name="passRegistro" className={style.input}/><br/>
                            <label className={style.input}>Email: *</label>
                            <input type="email" id="emailRegistro" name="emailRegistro" className={style.input}/><br/>
                            <label className={style.input}>Teléfono</label>
                            <input type="tel" id="telRegistro" name="telRegistro" className={style.input}/><br/>
                            <button type="button" className={style.button} onClick={registrarse}>Registrarse</button>
                        </> }
                        {isRegistred &&
                        <> 
                            <label className={style.input}>Usuario:</label>
                            <input type="text" id="userInicio" name="userInicio" className={style.input}/><br/>
                            <label className={style.input}>Contraseña:</label>
                            <input type="password" id="passInicio" name="passInicio" className={style.input}/><br/>
                            <button type="button" className={style.button} onClick={iniciarSesion}>Iniciar sesión</button>
                        </>}
                    </div>
                </Popup>
                </div>
            {/* <div ngIf="isLoggedIn" className={style.container}>
            <div className={style.nav}><Link href="/perfil">Login</Link></div>
            <div className={style.nav} ><Link href="/">Logout</Link></div>
            </div> */}
        </div>
        
        
    )
}


export default Login;