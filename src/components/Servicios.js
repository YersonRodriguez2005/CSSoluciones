import React, { useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";
import { 
  FaTree, 
  FaPaintRoller, 
  FaCamera, 
  FaBolt, 
  FaShieldAlt,
  FaInfoCircle
} from "react-icons/fa";

const Servicios = () => {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            icon: <FaCamera />,
            title: "Cámaras y Alarmas",
            description: "Instalación de cámaras de vigilancia y alarmas de seguridad.",
            color: "text-red-600",
            details: [
                "Sistemas de alta definición",
                "Monitoreo remoto 24/7",
                "Instalación profesional"
            ],
            bgGradient: "from-red-100 to-red-200"
        },
        {
            icon: <FaShieldAlt />,
            title: "Sensores de Movimiento",
            description: "Implementación de sensores avanzados para protección.",
            color: "text-yellow-500",
            details: [
                "Detección de movimiento precisa",
                "Tecnología de última generación",
                "Integración inteligente"
            ],
            bgGradient: "from-yellow-100 to-yellow-200"
        },
        {
            icon: <FaBolt />,
            title: "Redes Eléctricas",
            description: "Mantenimiento profesional de redes eléctricas.",
            color: "text-blue-500",
            details: [
                "Diagnóstico integral",
                "Mejora de eficiencia energética",
                "Soluciones personalizadas"
            ],
            bgGradient: "from-blue-100 to-blue-200"
        },
        {
            icon: <FaTree />,
            title: "Zonas Verdes",
            description: "Mantenimiento de jardines y áreas verdes.",
            color: "text-green-600",
            details: [
                "Diseño paisajístico",
                "Mantenimiento especializado",
                "Sostenibilidad ambiental"
            ],
            bgGradient: "from-green-100 to-green-200"
        },
        {
            icon: <FaShieldAlt />,
            title: "Impermeabilización",
            description: "Impermeabilización de fachadas contra filtraciones.",
            color: "text-gray-600",
            details: [
                "Técnicas avanzadas",
                "Protección de largo plazo",
                "Prevención de daños estructurales"
            ],
            bgGradient: "from-gray-100 to-gray-200"
        },
        {
            icon: <FaPaintRoller />,
            title: "Pintado de Casas",
            description: "Servicio completo de pintado de interiores y exteriores.",
            color: "text-purple-500",
            details: [
                "Preparación superficial",
                "Colores personalizados",
                "Acabados profesionales"
            ],
            bgGradient: "from-purple-100 to-purple-200"
        }
    ];

    const handleServiceClick = (index) => {
        setActiveService(activeService === index ? null : index);
    };

    return (
        <section id="servicios" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-red-600"
                >
                    Nuestros Servicios
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1 
                            }}
                            className={`
                                relative group overflow-hidden
                                bg-gradient-to-br ${service.bgGradient}
                                shadow-lg rounded-2xl p-6 
                                transform transition-all duration-300
                                hover:scale-105 hover:shadow-xl
                            `}
                        >
                            {/* Icono y título */}
                            <div className="flex flex-col items-center mb-4">
                                <div className={`text-5xl mb-3 ${service.color}`}>
                                    {React.cloneElement(service.icon, { className: "mx-auto" })}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {service.title}
                                </h3>
                            </div>

                            {/* Descripción principal */}
                            <p className="text-gray-700 mb-4 text-center">
                                {service.description}
                            </p>

                            {/* Botón de información */}
                            <button 
                                onClick={() => handleServiceClick(index)}
                                className={`
                                    absolute top-4 right-4 
                                    ${service.color} opacity-70 hover:opacity-100
                                    transition-opacity duration-300
                                `}
                                aria-label="Ver más detalles"
                            >
                                <FaInfoCircle className="text-2xl" />
                            </button>

                            {/* Detalles adicionales */}
                            <AnimatePresence>
                                {activeService === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mt-4 bg-white/80 rounded-lg p-4"
                                    >
                                        <ul className="space-y-2 text-left">
                                            {service.details.map((detail, detailIndex) => (
                                                <li 
                                                    key={detailIndex} 
                                                    className={`
                                                        flex items-center 
                                                        ${service.color}
                                                    `}
                                                >
                                                    <span className="mr-2">•</span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Botón de acción */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`
                                    mt-4 px-6 py-2 
                                    bg-red-600 text-white 
                                    rounded-full 
                                    hover:bg-yellow-600 
                                    transition-all duration-300
                                `}
                            >
                                Contratar Servicio
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios;