import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearchPlus, 
  FaArrowLeft, 
  FaArrowRight 
} from 'react-icons/fa';

const Galeria = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(null);

    const images = [
        { 
            src: 'path_to_image1.jpg', 
            alt: 'Instalación de Cámaras', 
            category: 'Seguridad' 
        },
        { 
            src: 'path_to_image2.jpg', 
            alt: 'Mantenimiento Eléctrico', 
            category: 'Redes Eléctricas' 
        },
        { 
            src: 'path_to_image3.jpg', 
            alt: 'Jardín Diseñado', 
            category: 'Zonas Verdes' 
        },
        { 
            src: 'path_to_image4.jpg', 
            alt: 'Impermeabilización', 
            category: 'Construcción' 
        },
        { 
            src: 'path_to_image5.jpg', 
            alt: 'Sistema de Alarmas', 
            category: 'Seguridad' 
        },
        { 
            src: 'path_to_image6.jpg', 
            alt: 'Pintura Exterior', 
            category: 'Decoración' 
        },
        { 
            src: 'path_to_image7.jpg', 
            alt: 'Sensor de Movimiento', 
            category: 'Tecnología' 
        },
        { 
            src: 'path_to_image8.jpg', 
            alt: 'Remodelación', 
            category: 'Construcción' 
        }
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
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold mb-8 text-red-600"
                >
                    Galería de Trabajos Realizados
                </motion.h2>

                {/* Filtros de categoría */}
                <div className="flex justify-center mb-8 space-x-4">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFilter(category)}
                            className={`
                                px-4 py-2 rounded-full 
                                transition-all duration-300
                                ${filter === category 
                                    ? 'bg-red-600 text-white' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-red-100'
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
                                staggerChildren: 0.1 
                            } 
                        }
                    }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {filteredImages.map((image, index) => (
                        <motion.div
                            key={image.src}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9 },
                                visible: { 
                                    opacity: 1, 
                                    scale: 1,
                                    transition: { duration: 0.5 }
                                }
                            }}
                            className="relative group overflow-hidden rounded-lg shadow-lg"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                <button
                                    onClick={() => openImageModal(image, filteredImages.indexOf(image))}
                                    className="opacity-0 group-hover:opacity-100 text-white bg-red-600 p-3 rounded-full transition-all duration-300"
                                >
                                    <FaSearchPlus size={24} />
                                </button>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white">
                                <p className="text-sm">{image.alt}</p>
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
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
                        onClick={closeImageModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="max-w-4xl w-full relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => navigateImages('prev')}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 rounded-full p-3 hover:bg-white/50 transition-all"
                            >
                                <FaArrowLeft className="text-white" />
                            </button>
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full max-h-[80vh] object-contain"
                            />
                            <button 
                                onClick={() => navigateImages('next')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 rounded-full p-3 hover:bg-white/50 transition-all"
                            >
                                <FaArrowRight className="text-white" />
                            </button>
                            <div className="mt-4 text-center text-white">
                                <h3 className="text-2xl">{selectedImage.alt}</h3>
                                <p className="text-gray-300">{selectedImage.category}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Galeria;