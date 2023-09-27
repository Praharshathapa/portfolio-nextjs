import { useState } from "react";
import { Menu, X } from "react-feather";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const controls = useAnimation();

    const scrollToTop = () => {
        scroll.scrollToTop();
        setNavbar(false);
    };

    const toggleNavbar = () => {
        setNavbar(!navbar);
        controls.start({
            opacity: navbar ? 1 : 0.8,
            scale: navbar ? 1 : 1.1,
            rotate: navbar ? 0 : 180,
            transition: { duration: 0.5, type: "spring" },
        });
    };

    return (
        <div className='custom-cursor'>
            <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <ScrollLink to="hi" smooth={true} duration={500} onClick={scrollToTop}>
                                <h2 className="text-2xl text-cyan-500 font-bold">~/dev-Praharsha</h2>
                            </ScrollLink>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-600 rounded-md outline-none"
                                    onClick={toggleNavbar}
                                >
                                    <motion.div
                                        className="menu-icon"
                                        initial={{ scale: 1, opacity: 1 }}
                                        animate={controls}
                                    >
                                        {navbar ? (
                                            <X width={30} height={30} alt="logo" />
                                        ) : (
                                            <Menu width={30} height={30} alt="logo" />
                                        )}
                                    </motion.div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`custom-cursor flex-1 justify-self-center pb-2 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "p-12 md:p-0 block" : "hidden"
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex">
                                <li className="pb-2 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-cyan-900 border-cyan-600 md:hover:text-cyan-600 md:hover:bg-transparent">
                                    <ScrollLink to="hi" smooth={true} duration={500} onClick={() => setNavbar(!navbar)}>
                                        About
                                    </ScrollLink>
                                </li>
                                <li className="pb-2 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-cyan-600 border-cyan-600 md:hover:text-cyan-600 md:hover:bg-transparent">
                                    <ScrollLink to="Projects" smooth={true} duration={500} onClick={() => setNavbar(!navbar)}>
                                        Projects
                                    </ScrollLink>
                                </li>
                                <li className="pb-2 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-cyan-600 border-cyan-600 md:hover:text-cyan-600 md:hover:bg-transparent">
                                    <ScrollLink to="Hobby" smooth={true} duration={500} onClick={() => setNavbar(!navbar)}>
                                        Hobbies
                                    </ScrollLink>
                                </li>
                                <li className="pb-2 text-xl text-white py-2 px-10 text-center border-b-2 md:border-b-0 hover:bg-cyan-600 border-cyan-600 md:hover:text-cyan-600 md:hover:bg-transparent">
                                    <ScrollLink to="Contacts" smooth={true} duration={500} onClick={() => setNavbar(!navbar)}>
                                        Contact
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
