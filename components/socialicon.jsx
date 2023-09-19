import React, { useState, useEffect } from "react";
import { Instagram, Linkedin, GitHub, Twitter } from "react-feather";
import { motion } from "framer-motion";

const socialMediaLinks = [
    { name: "Instagram", icon: <Instagram />, url: "https://www.instagram.com/your_username" },
    { name: "LinkedIn", icon: <Linkedin />, url: "https://www.linkedin.com/in/your_profile" },
    { name: "GitHub", icon: <GitHub />, url: "https://github.com/your_username" },
    { name: "Twitter", icon: <Twitter />, url: "https://twitter.com/your_handle" },
];

const postWhileHover = {
    position: 'relative',
    zIndex: 1,
    scale: [1, 1.4, 1.2],
    rotate: [0, 10, -10, 0],
    filter: [
        'hue-rotate(0) contrast(100%)',
        'hue-rotate(360deg) contrast(200%)',
        'hue-rotate(45deg) contrast(300%)',
        'hue-rotate(0) contrast(100%)'],
    transition: {
        duration: .2
    }
}

const RenderList = (props) => {
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
        return null; // Hide the component on small screens
    }

    return (
        <div className="color-cyan fixed top-1/2 left-4 transform -translate-y-1/2 p-1 rounded shadow-md z-50">
            <ul>
                {!isSmallScreen && // Check if it's not a small screen
                    socialMediaLinks.map((link, index) => (
                        <li className="mb-5 color-cyan" key={index}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <motion.div whileHover={postWhileHover}>
                                    {link.icon}
                                </motion.div>
                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default RenderList;
