import {useState, useEffect} from 'react';

export default function CicloDeVida () {

    const [data,setData]=useState(null);

    useEffect(()=> {
        console.log('Componente montado');
        //Simulación de llamada a una API
        setTimeout(()=>{
            setData('Datos cargados');
        },1000);
    },[] );

    const handleClick = () => {
        setData('Datos actualizados');
    }

    return (
        <section>
            <h1>{data}</h1>
            <button onClick={handleClick}>Actualizar la variable de estado.</button>
        </section>
    )
}