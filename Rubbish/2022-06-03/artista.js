import { useState, useEffect } from 'react';
import style from '../styles/Artista.module.css';

const Artista = (props) =>{
    const [artista, setArtista] = useState([]);
    const [horarios, setHorario] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/artists').then(res => res.json()).then(data => {setArtista(data.find(artist => artist.name === props.name))});
        fetch('http://localhost:5000/horarios').then(res => res.json()).then(data => {setHorario(data.find(horario => horario.artist === props.id)); muestra()});
    }, [artista, horarios])

    console.log(horarios)

    const muestra = () =>{
        const horario = horarios.horas
        console.log("type"+horario)
        for(const dia in horario){
            console.log(dia)
            console.log(horario[dia])
        }
    }
        
    

    return(
        <div className ={style.container}>
            <img src={artista.imagen} alt={artista.name} className={style.img} width="100px" height="100px"/>
            <h1>{artista.name}</h1>
            <p>Edad: {artista.edad}</p>
            <p>Email: {artista.email}</p>
            <p>{artista.descripcion}</p>
            {/* <div dangerouslySetInnerHTML={{ __html: table }}>

            </div> */}
        </div>
    )
}

export default Artista;