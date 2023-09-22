"use client"
import React from 'react';
import NavBar from '@/components/NavBar.jsx';
import Image from 'next/image';
import RenderList from '@/components/socialicon';
import Education from '@/components/education/education';
import Skills from '@/components/skills/skills';
import profile from '../app/profile.jpg';
import ProjectList from '@/components/projects/Projects';
import ContactForm from '@/components/contactinfo/Contactform';
import "./page.css"
import BackgroundAnimation from '../components/background/animat';

export default function Home() {
  return (
    <div className='custom-cursor relative z-5'>
      <div className="min-h-screen">
        <NavBar />
        <RenderList />
        <section id="hi" className="h-screen flex justify-center items-center z-1">
          <BackgroundAnimation />

          <div className="profile-picture-container relative ml-4 w-60 h-60 overflow-hidden shadow-lg">
            <Image
              src={profile}
              alt="Profile Picture"
              objectFit="cover"
              layout="fill"
              className="profile-picture rounded-custom-shape"
            />
          </div>
          <div className="text-container relative ml-4">
            <h1 className="text-4xl font-bold mb-2 glow-text">Hi! I am Praharsha Thapa</h1>
            <div className="w-20 h-1 bg-cyan-600 rounded-full mb-4"></div>
            <p className="text-xl font-semibold">Welcome to my portfolio</p>
          </div>
        </section>

        <div className="flex flex-col mx-auto mr-10 md:flex-row mt-10 max-w-screen-xl">
          <div className="md:w-1/2 p-4">
            <Education />
          </div>
          <div className="md:w-1/2 p-4">
            <Skills />
          </div>
        </div>

        <section id="Projects" className="text-white h-screen bg-cyan-600 flex justify-center items-center">
          <ProjectList />
        </section>
        <section id="Hobby" className="text-white h-screen bg-black text-center flex justify-center items-center">
          <h1 className="text-6xl font-bold text-cyan-600">Hobby</h1>
        </section>
        <section id="Contacts" className="text-white h-screen bg-cyan-700 flex justify-center items-center">
          <ContactForm />
        </section>
      </div>
    </div>
  );
}

