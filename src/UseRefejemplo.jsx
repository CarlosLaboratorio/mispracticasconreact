import {useRef} from 'react';

export default function UseRefejemplo () {
    const divRef  = useRef(null);

    const handleClick = () => {
        divRef.current.innerHTML = "¡Has hecho clic en el div!";
        divRef.current.style.backgroundColor = "#D3D3D3";

    }

    return (
        <div>
            <div ref={divRef}>Contenido del div</div>
            <button onClick={handleClick}>Haz clic aquí</button>
        </div>
    )
}
