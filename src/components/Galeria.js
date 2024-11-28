import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import img7 from "../img/img7.png";
import img8 from "../img/img8.png";
import img9 from "../img/img9.png";
import img10 from "../img/img10.png";
import img11 from "../img/img11.png";
import img12 from "../img/img12.png";
import img13 from "../img/img13.png";
import img14 from "../img/img14.png";
import img16 from "../img/img16.png";
import img17 from "../img/img17.png";

import {
    FaSearchPlus,
    FaArrowLeft,
    FaArrowRight
} from 'react-icons/fa';

const Galeria = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(null);

    // Asignar las imágenes de forma aleatoria a las categorías
    const images = [
        { src: img2, alt: 'Instalación de Cámaras', category: 'Seguridad' },
        { src: img7, alt: 'Instalación de Cámaras', category: 'Seguridad' },
        { src: img16, alt: 'Instalación de Cámaras', category: 'Seguridad' },
        { src: img17, alt: 'Instalación de Cámaras', category: 'Seguridad' },
        { src: img1, alt: 'Mantenimiento Eléctrico', category: 'Redes Eléctricas' },
        { src: img14, alt: 'Mantenimiento Eléctrico', category: 'Redes Eléctricas' },
        { src: img6, alt: 'Mantenimiento Eléctrico', category: 'Redes Eléctricas' },
        { src: img10, alt: 'Jardín Diseñado', category: 'Zonas Verdes' },
        { src: img3, alt: 'Sensor de Movimiento con lampara', category: 'Tecnología' },
        { src: img4, alt: 'Instalación de lampara led', category: 'Tecnología' },
        { src: img8, alt: 'Mantenimiento Jardín', category: 'Zonas Verdes' },
        { src: img9, alt: 'Mantenimiento Jardín', category: 'Zonas Verdes' },
        { src: img5, alt: 'Mantenimiento Jardín', category: 'Zonas Verdes' },
        { src: img13, alt: 'Paisajismo en Áreas Públicas', category: 'Zonas Verdes' },
        { src: img11, alt: 'Reparación de Redes Eléctricas', category: 'Redes Eléctricas' },
        { src: img12, alt: 'Reparación de Redes Eléctricas', category: 'Redes Eléctricas' },
    ];

    const [filter, setFilter] = useState('Todos');
    const categories = ['Todos', ...new Set(images.map(img => img.category))];

    const filteredImages = filter === 'Todos'
        ? images
        : images.filter(img => img.category === filter);

    const openImageModal = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
        setCurrentImageIndex(null);
    };

    const navigateImages = (direction) => {
        if (direction === 'next') {
            const nextIndex = (currentImageIndex + 1) % filteredImages.length;
            setSelectedImage(filteredImages[nextIndex]);
            setCurrentImageIndex(nextIndex);
        } else {
            const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
            setSelectedImage(filteredImages[prevIndex]);
            setCurrentImageIndex(prevIndex);
        }
    };

    return (
        <section id="galeria" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
                {/* Título */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-[#1B3894]"
                >
                    Galería de Trabajos Realizados
                </motion.h2>

                {/* Filtros de categoría */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFilter(category)}
                            className={`
                        px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base 
                        transition-all duration-300
                        ${filter === category
                                    ? 'bg-[#1B3894] text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-[#1B3894]'
                                }
                    `}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>

                {/* Galería de imágenes */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
                >
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.src}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    transition: { duration: 0.5 },
                                },
                            }}
                            className="relative group overflow-hidden rounded-lg shadow-md"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                <button
                                    onClick={() => openImageModal(image, filteredImages.indexOf(image))}
                                    className="opacity-0 group-hover:opacity-100 text-white bg-[#1B3894] p-3 rounded-full transition-all duration-300"
                                >
                                    <FaSearchPlus size={20} />
                                </button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-1 sm:p-2 text-white">
                                <p className="text-xs sm:text-sm">{image.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal de imagen ampliada */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-2 sm:p-4"
                        onClick={closeImageModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="max-w-full w-full sm:max-w-4xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => navigateImages('prev')}
                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 rounded-full p-2 sm:p-3 hover:bg-white/50 transition-all"
                            >
                                <FaArrowLeft className="text-white" />
                            </button>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full max-h-[75vh] object-contain"
                            />
                            <button
                                onClick={() => navigateImages('next')}
                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 rounded-full p-2 sm:p-3 hover:bg-white/50 transition-all"
                            >
                                <FaArrowRight className="text-white" />
                            </button>
                            <div className="mt-2 sm:mt-4 text-center text-white">
                                <h3 className="text-lg sm:text-2xl">{selectedImage.alt}</h3>
                                <p className="text-gray-300 text-sm sm:text-base">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Galeria;
