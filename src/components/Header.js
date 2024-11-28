import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaWhatsapp, FaBars, FaTimes, FaHome, FaTools, FaEnvelope, FaImage } from "react-icons/fa";
import logo from "../img/logo.jpg";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Inicio", href: "#inicio", icon: FaHome },
        { name: "Servicios", href: "#servicios", icon: FaTools },
        { name: "Contacto", href: "#contacto", icon: FaEnvelope },
        { name: "Galería", href: "#galeria", icon: FaImage },
    ];

    const socialLinks = [
        { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61556186020221", label: "Facebook" },
        { icon: FaWhatsapp, href: "https://wa.me/573124457755", label: "WhatsApp" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
                {/* Logo */}
                <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={logo}
                        alt="CS Soluciones Logo"
                        className="h-10 w-10 mr-2 rounded-full object-cover sm:h-12 sm:w-12"
                    />
                    <h1 className="text-lg sm:text-xl font-bold text-[#1B3894] hidden sm:block">
                        C.S.Soluciones
                    </h1>
                </motion.div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[#1B3894]"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Navigation Links - Desktop */}
                <nav className="hidden md:flex space-x-6 text-[#15AE5C]">
                    {navLinks.map(({ name, href, icon: Icon }) => (
                        <motion.a
                            key={name}
                            href={href}
                            className="flex items-center hover:text-[#1B3894] transition-all duration-300 font-medium space-x-2"
                            whileHover={{ scale: 1.1 }}
                            aria-label={name}
                        >
                            <Icon size={18} />
                            <span>{name}</span>
                        </motion.a>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="hidden md:flex space-x-5 text-[#15AE5C]">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            className="hover:text-[#1B3894] transition-all duration-300"
                            whileHover={{ scale: 1.2 }}
                            aria-label={label}
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="fixed inset-0 bg-white md:hidden z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="flex flex-col items-center justify-center h-full space-y-6">
                                {navLinks.map(({ name, href, icon: Icon }) => (
                                    <motion.a
                                        key={name}
                                        href={href}
                                        className="text-lg sm:text-2xl text-[#15AE5C] hover:text-[#1B3894] flex items-center space-x-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: navLinks.indexOf(name) * 0.1 }}
                                        onClick={toggleMenu}
                                    >
                                        <Icon size={20} />
                                        <span>{name}</span>
                                    </motion.a>
                                ))}
                                <div className="flex space-x-6 mt-6">
                                    {socialLinks.map(({ icon: Icon, href, label }) => (
                                        <motion.a
                                            key={label}
                                            href={href}
                                            className="text-[#15AE5C] hover:text-[#1B3894]"
                                            whileHover={{ scale: 1.2 }}
                                            aria-label={label}
                                        >
                                            <Icon size={30} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
