import { useState } from 'react';
import Confetti from './../ConfettiComponent/Confetti.jsx';
import './Boton.css'

function Boton() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [fireworks, setFireworks] = useState([]);

    function saludar() {
        setShowConfetti(true);

        // Genera un nuevo lote de fuegos artificiales sin reemplazar los anteriores
        const newFireworks = Array.from({ length: 5 }).map(() => ({
            id: Math.random(),
            maxHeight: -50 - Math.random() * 500, // Altura aleatoria entre -150 y -350
            leftPosition: `${Math.random() * (1500 - 100) + 100}px`, // Rango ajustado entre 100px y 500px
        }));

        // Añade los nuevos fuegos artificiales a los existentes
        setFireworks((prevFireworks) => [...prevFireworks, ...newFireworks]);

        // Opcional: Mantiene el confeti visible por más tiempo si es necesario
        setTimeout(() => setShowConfetti(false), 20000);
    }

    return (
        <>
            <div>
                <button id="boton" onClick={saludar}>hola</button>
            </div>
            {showConfetti && (
                <>
                    {fireworks.map((fw) => (
                        <Confetti
                            key={fw.id}
                            maxHeight={fw.maxHeight}
                            leftPosition={fw.leftPosition}
                        />
                    ))}
                </>
            )}
        </>
    );
}

export default Boton;
