"use client"
import React from 'react';
import NavBar from '@/components/NavBar.jsx';
import Image from 'next/image';
import RenderList from '@/components/socialicon';
import Education from '@/components/education';
import Skills from '@/components/skills';
import profile from '../app/profile.jpg';





export default function Home() {
  return (
    <div className='custom-cursor relative z-10 '>
      <div className="bg-black text-white min-h-screen">
        <NavBar />
        <RenderList />
        <section id="hi" className="h-screen flex flex-col justify-center items-center">
          <div className="relative mx-auto mb-6 w-60 h-60 overflow-hidden shadow-lg">
            <Image
              src={profile}
              alt="Profile Picture"
              objectFit="cover"
              layout="fill"
              className="rounded-custom-shape"
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">Hi! I am Praharsha Thapa</h1>
          <div className="w-20 h-1 bg-cyan-600 rounded-full mb-4"></div>
          <p className="text-xl font-semibold">
            Welcome to my portfolio
          </p>
        </section>

        <div className="flex flex-col md:flex-row mx-auto mt-12 max-w-screen-xl">
          <div className="md:w-1/2 p-4">
            <Education />
          </div>
          <div className="md:w-1/2 p-4">
            <Skills />
          </div>
        </div>

        <section id="Projects" className="text-white h-screen bg-cyan-600 flex justify-center items-center">
          <h1 className="text-6xl font-bold">Projects</h1>
        </section>
        <section id="Hobby" className="text-white h-screen bg-black text-center flex justify-center items-center">
          <h1 className="text-6xl font-bold text-cyan-600">Hobby</h1>
        </section>
        <section id="Contacts" className="text-white h-screen bg-cyan-700 flex justify-center items-center">
          <h1 className="text-6xl font-bold">Contacts</h1>
        </section>
      </div>
    </div>
  );
}
