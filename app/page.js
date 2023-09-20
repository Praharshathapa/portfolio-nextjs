"use client"

import NavBar from '@/components/NavBar.jsx';
import Image from 'next/image'
import RenderList from '@/components/socialicon';
import Education from '@/components/education';
import Skills from '@/components/skills';


export default function Home() {
  return (
    <div className='custom-cursor'>

      <NavBar />


      <RenderList />
      <section
        id="about"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto text-cyan-600 ">
          <Education />
          <Skills />
        </h1>
      </section>
      <section id="blog" className=" text-white h-screen bg-cyan-600 flex">
        <h1 className="m-auto font-waterfall text-9xl text-black font-bold">
          Blog
        </h1>
      </section>
      <section
        id="contact"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-9xl text-cyan-600 font-bold">
          Contact{' '}
        </h1>
      </section>
      <section
        id="projects"
        className=" text-white h-screen bg-cyan-700 flex"
      >
        <h1 className="m-auto font-waterfall text-9xl text-black font-bold">
          Projects
        </h1>
      </section>


    </div>
  );
}