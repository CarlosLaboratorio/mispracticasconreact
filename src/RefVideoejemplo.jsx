import {useRef} from 'react';

export default function UseVideoejemplo () {
    const videoRef=useRef(null);
    const clicksRef= useRef(0);

    const handleClickPlay=()=>{
        videoRef.current.play();
        clicksRef.current++;
        console.log('Clicks acumulados: '+clicksRef.current);
    }

    const handleClickPause=()=>{
        videoRef.current.pause();
        clicksRef.current++;
        console.log('Clicks acumulados: '+clicksRef.current);
    }


    return (
        <section 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 20
            }}
        >
            <h2>Video Ejemplo con useRef</h2>
            <video ref={videoRef} src="/videos/gargantadeldiablo.mp4" style={{width: "70%"}}></video>
            <article style={{display:'flex',gap:20}}>
                <button onClick={handleClickPlay}>▶️</button>
                <button onClick={handleClickPause}>⏸️</button>
            </article>

        </section>
    )
}