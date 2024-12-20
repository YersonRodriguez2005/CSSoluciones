import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import fondo from "../img/fondo.png";

const Inicio = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        "Servicios de limpieza y mantenimiento",
        "Servicios de Electricidad",
        "Servicios de Jardinería",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [features.length]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section
            id="inicio"
            className="relative h-screen bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage: `url(${fondo})`,
            }}
        >
            {/* Overlay con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-[#1B3894]/50 flex flex-col justify-center items-center text-center text-white px-6 sm:px-12 py-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl mx-auto"
                >
                    {/* Texto Principal */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
                    >
                        C.S.Soluciones
                    </motion.h1>

                    {/* Texto dinámico de características */}
                    <motion.div
                        variants={itemVariants}
                        className="relative h-12 sm:h-16 md:h-20 overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={activeFeature}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5 }}
                                className="text-xl sm:text-3xl md:text-4xl font-medium text-[#15AE5C] mb-6"
                            >
                                {features[activeFeature]}
                            </motion.h2>
                        </AnimatePresence>
                    </motion.div>

                    {/* Botón de llamado a la acción */}
                    <motion.a
                        variants={itemVariants}
                        href="https://wa.me/573124457755"
                        className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#1B3894] text-white font-bold rounded-lg shadow-xl hover:bg-[#15AE5C] transition-all duration-300 mt-6 text-sm sm:text-base"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <span className="mr-3">Contáctanos</span>
                        <motion.span
                            animate={{
                                x: isHovered ? 5 : 0,
                                rotate: isHovered ? [0, 10, -10, 0] : 0,
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FaArrowRight className="transition-transform" />
                        </motion.span>
                    </motion.a>

                    {/* Características clave */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm sm:text-base opacity-90"
                    >
                        {[
                            "Atención al Cliente",
                            "Personal Capacitado",
                            "Soluciones a Medida",
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-start sm:justify-center space-x-2"
                            >
                                <FaCheck className="text-[#15AE5C]" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Efecto de partículas sutiles */}
            {[...Array(20)].map((_, index) => (
                <motion.div
                    key={index}
                    className="absolute bg-white/20 rounded-full"
                    style={{
                        width: `${Math.random() * 10 + 2}px`,
                        height: `${Math.random() * 10 + 2}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                        transition: {
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                        },
                    }}
                />
            ))}
        </section>
    );
};

export default Inicio;
