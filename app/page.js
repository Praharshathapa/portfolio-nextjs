"use client";

import NavBar from '@/components/NavBar.jsx';
import Image from 'next/image';
import RenderList from '@/components/socialicon';
import Education from '@/components/education';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <div className='custom-cursor z-10'>
      <NavBar />
      <RenderList />
      <section id="hi" className="h-screen bg-black text-white text-center flex flex-col justify-center relative">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg z-5">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4 ">Hi! I am Praharsha Thapa</h1>
          <div className="w-20 h-1 bg-cyan-600 mx-auto rounded-full mb-6 animate-bounce "></div>
          <p className="text-lg text-cyan-600 font-semibold ">
            Welcome to my portfolio
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 z-10">
          <div>
            <Education />
          </div>
          <div>
            <Skills />
          </div>
        </div>
      </section>
      <section id="Projects" className="text-white h-screen bg-cyan-600 flex">
        <h1 className="m-auto font-waterfall text-9xl text-black font-bold">
          Projects
        </h1>
      </section>
      <section id="Hobby" className="text-white h-screen bg-black text-center flex">
        <h1 className="m-auto font-waterfall text-9xl text-cyan-600 font-bold">
          Hobby
        </h1>
      </section>
      <section id="Contacts" className="text-white h-screen bg-cyan-700 flex">
        <h1 className="m-auto font-waterfall text-9xl text-black font-bold">
          Contacts
        </h1>
      </section>
    </div>
  );
}
