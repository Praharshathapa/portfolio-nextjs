import React, { useState, useEffect } from "react";
import { Instagram, Linkedin, GitHub, Twitter } from "react-feather";
import { motion } from "framer-motion";

const socialMediaLinks = [
    { name: 'Instagram', icon: <Instagram />, url: 'https://www.instagram.com/praharsha__7/' },
    { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/praharsha-thapa-26a727147/' },
    { name: 'GitHub', icon: <GitHub />, url: 'https://github.com/Praharshathapa' },
    { name: 'Twitter', icon: <Twitter />, url: 'https://twitter.com/dataminer_12' },
];


const iconVariants = {
    hover: { scale: 1.5 },
};

const RenderList = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (isSmallScreen) {
        return null;
    }

    return (
        <div className="fixed top-1/2 right-4 transform -translate-y-1/2 p-1 z-50 icon-container">
            <ul>
                {!isSmallScreen &&
                    socialMediaLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            className="mb-5"
                            initial="initial"
                            whileHover="hover"
                            variants={iconVariants}
                        >
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <div className="icon text-cyan-500 hover:text-cyan-100">
                                    {link.icon}
                                </div>
                            </a>
                        </motion.li>
                    ))}
            </ul>
        </div>
    );
};

export default RenderList;
