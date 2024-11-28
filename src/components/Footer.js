import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaWhatsapp, FaHome, FaTools, FaEnvelope, FaUser } from "react-icons/fa";

const Footer = () => {
    const navLinks = [
        { name: "Inicio", href: "#inicio", icon: FaHome },
        { name: "Servicios", href: "#servicios", icon: FaTools },
        { name: "Contacto", href: "#contacto", icon: FaEnvelope },
        { name: "Nosotros", href: "#nosotros", icon: FaUser }
    ];

    const socialLinks = [
        { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100093573220764", label: "Facebook" },
        { icon: FaWhatsapp, href: "https://wa.me/573124457755", label: "WhatsApp" }
    ];

    return (
        <footer id="contacto" className="bg-white shadow-md w-full py-8">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                {/* Redes Sociales */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center md:text-left"
                >
                    <h3 className="text-xl font-bold text-[#1B3894] mb-4">Síguenos</h3>
                    <div className="flex justify-center md:justify-start space-x-5 text-[#15AE5C]">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                className="hover:text-[#1B3894] transition-all duration-300"
                                whileHover={{ scale: 1.2 }}
                                aria-label={label}
                            >
                                <Icon size={30} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Enlaces rápidos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h3 className="text-xl font-bold text-[#1B3894] mb-4">Enlaces rápidos</h3>
                    <div className="space-y-2">
                        {navLinks.map(({ name, href, icon: Icon }) => (
                            <motion.a
                                key={name}
                                href={href}
                                className="flex items-center justify-center hover:text-[#1B3894] transition-all duration-300 text-[#15AE5C] space-x-2"
                                whileHover={{ scale: 1.1 }}
                            >
                                <Icon size={18} />
                                <span>{name}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Información de Contacto */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center md:text-right"
                >
                    <h3 className="text-xl font-bold text-[#1B3894] mb-4">Contacto</h3>
                    <p className="text-[#15AE5C]">
                        Teléfono: +57 312 445 7755
                    </p>
                    <p className="text-[#15AE5C]">
                        Email: info@csoluciones.com
                    </p>
                </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center mt-8 pt-4 border-t border-gray-200 text-[#15AE5C]"
            >
                © 2024 C.S. Soluciones. Todos los derechos reservados.
            </motion.div>
        </footer>
    );
};

export default Footer;