import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const Confetti = ({ maxHeight, leftPosition }) => {
    const controls = useAnimation();
    const [exploded, setExploded] = useState(false);

    useEffect(() => {
        controls.start({
            y: maxHeight,
            transition: {
                duration: 1.5,
                ease: "easeOut",
            },
        }).then(() => {
            setExploded(true); // Marca el confeti como explotado
            setTimeout(() => setExploded(false), 5000);
        });
    }, [controls, maxHeight]);

    const randomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    if (exploded) {
        return (
            <>
                {Array.from({ length: 10 }).map((_, index) => (
                    <motion.div
                        key={index}
                        className="confetti"
                        initial={{
                            y: maxHeight, // Inicia en el mismo punto donde termina el confeti principal
                            x: 0,
                            scale: 1,
                            opacity: 1,
                        }}
                        animate={{
                            x: (Math.random() - 0.5) * 200, // Dispersión horizontal
                            y: maxHeight + (Math.random() - 0.5) * 200, // Dispersión vertical
                            scale: 0.5,
                            opacity: 0,
                            transition: {
                                duration: 2,
                                ease: "easeOut",
                            },
                        }}
                        style={{
                            width: 10,
                            height: 10,
                            backgroundColor: randomColor(),
                            position: "absolute",
                            left: leftPosition,
                            //top: `calc(100% + ${maxHeight}px)`, // Ajusta la altura de la explosión
                            top: "100%"
                        }}
                    />
                ))}
            </>
        );
    }

    return (
        <motion.div
            className="confetti"
            initial={{ y: 0, scale: 1 }}
            animate={controls}
            style={{
                width: 10,
                height: 10,
                backgroundColor: randomColor(),
                position: "absolute",
                left: leftPosition,
                top: "100%", // Inicia el confeti desde el fondo del contenedor
            }}
        />
    );
};

export default Confetti;
