import React, { useState } from 'react';
import { Instagram, Linkedin, GitHub, Twitter } from 'react-feather';
import { motion } from 'framer-motion';

function ContactForm() {
    const socialMediaLinks = [
        { name: 'Instagram', icon: <Instagram />, url: 'https://www.instagram.com/your_username' },
        { name: 'LinkedIn', icon: <Linkedin />, url: 'https://www.linkedin.com/in/your_profile' },
        { name: 'GitHub', icon: <GitHub />, url: 'https://github.com/your_username' },
        { name: 'Twitter', icon: <Twitter />, url: 'https://twitter.com/your_handle' },
    ];

    const iconVariants = {
        hover: { scale: 1.2 }, 
    };

    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        first: '',
        last: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        e.target.reset();

        setFormData({
            email: '',
            phone: '',
            first: '',
            last: '',
            message: '',
        });
    };

    return (
        <div className="min-h-screen bg-black container mx-auto py-10 text-white flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8">
                <h2 className="text-4xl md:text-6xl font-semibold text-center mb-6 text-cyan-600">Contact Me</h2>
                <p className="text-cyan-600 mb-6 text-center">
                    <a
                        href="mailto:thapapraharsha@gmail.com"
                        className="text-cyan-200 hover:text-cyan-100 transition duration-300 ease-in-out text-lg"
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
                                    className="text-cyan-500 hover:text-cyan-100 transition duration-300 ease-in-out"
                                >
                                    {link.icon}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="lg:w-1/2 p-8">
                <div className="bg-gray-300 p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="frm-email" className="text-cyan-800 font-medium block mb-2">Email</label>
                            <input
                                id="frm-email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-cyan-600 focus:border-cyan-600 text-cyan-800"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="frm-phone" className="text-cyan-800 font-medium block mb-2">Phone</label>
                            <input
                                id="frm-phone"
                                type="text"
                                name="phone"
                                autoComplete="tel"
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:ring-cyan-600 focus:border-cyan-600 text-cyan-800"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-4 flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 pr-2">
                                <label htmlFor="frm-first" className="text-cyan-800 font-medium block mb-2">First Name</label>
                                <input
                                    id="frm-first"
                                    type="text"
                                    name="first"
                                    autoComplete="given-name"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-cyan-600 focus:border-cyan-600 text-cyan-800"
                                    value={formData.first}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="lg:w-1/2 pl-2">
                                <label htmlFor="frm-last" className="text-cyan-800 font-medium block mb-2">Last Name</label>
                                <input
                                    id="frm-last"
                                    type="text"
                                    name="last"
                                    autoComplete="family-name"
                                    required
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-cyan-600 focus:border-cyan-600 text-cyan-800"
                                    value={formData.last}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="frm-message" className="text-cyan-800 font-medium block mb-2">Message</label>
                            <textarea
                                id="frm-message"
                                rows="6"
                                name="message"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-cyan-600 focus:border-cyan-600 text-cyan-800"
                                value={formData.message}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="bg-cyan-600 text-white py-3 px-6 rounded-lg hover:bg-cyan-700 transition duration-300 ease-in-out">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
