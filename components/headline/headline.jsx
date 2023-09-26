import React from 'react';
import BackgroundAnimation from '../background/animat';
import profile from './profile.jpg';
import Image from 'next/image';
import './page.css';

const Headline = () => {

    return (
        <section id="hi" className="h-screen flex flex-col justify-center items-center z-1">
            <BackgroundAnimation />
            <div className="profile-container flex flex-col md:flex-row items-center ml-4">
                <div className="profile-picture-container w-60 h-60 md:w-96 md:h-96 overflow-hidden shadow-lg">
                    <Image
                        src={profile}
                        alt="Profile Picture"
                        objectFit="cover"
                        layout="fill"
                        className="profile-picture rounded-custom-shape"
                    />
                </div>
                <div className="text-container relative ml-4 text-center md:text-left">
                    <h1 className="mb-2 glow-text">Hi! I am Praharsha Thapa</h1>
                    <div className="w-20 h-1 bg-cyan-600 rounded-full mb-4"></div>
                    <p className="text-2xl font-semibold">Welcome to my portfolio</p>
                </div>
            </div>
        </section>
    );
};

export default Headline