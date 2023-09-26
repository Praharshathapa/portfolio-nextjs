import React from 'react';
import { Instagram, Linkedin, GitHub, Twitter } from 'react-feather';
import { motion } from 'framer-motion';

const socialMediaLinks = [
    { name: 'Instagram', icon: <Instagram />, url: 'https://www.instagram.com/your_username' },
    { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/your_profile' },
    { name: 'GitHub', icon: <GitHub />, url: 'https://github.com/your_username' },
    { name: 'Twitter', icon: <Twitter />, url: 'https://twitter.com/your_handle' },
];

const iconVariants = {
    hover: { scale: 1.2 }, 
};

function Footer() {
    return (
        <footer className="bg-cyan-700 text-white py-10 gap-5 text-center p-8">
            <p className="text-cyan-300 mb-6">
                
                <a
                    href="mailto:thapapraharsha@gmail.com"
                    className="text-cyan-200 hover:text-cyan-100 transition duration-300 ease-in-out text-xl"
                >
                    thapapraharsha@gmail.com
                </a>
            </p>
            <div className="flex justify-center">
                <ul className="flex">
                    {socialMediaLinks.map((link, index) => (
                        <motion.li
                            key={index}
                            className="mr-3"
                            initial="initial"
                            whileHover="hover"
                            variants={iconVariants}
                        >
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-300 hover:text-cyan-100 transition duration-300 ease-in-out"
                            >
                                {link.icon}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
