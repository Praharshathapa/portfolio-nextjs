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
        id="hi"
        className="h-screen bg-black  text-center flex ">
        <h1 className="m-auto text-cyan-600 grid grid-cols-2 gap-3">
          <Education />
          <Skills />
        </h1>
      </section>
      <section id="Projects" className=" text-white h-screen bg-cyan-600 flex">
        <h1 className="m-auto font-waterfall text-9xl text-black font-bold">
          Projects
        </h1>
      </section>
      <section
        id="Hobby"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-9xl text-cyan-600 font-bold">
          Hobby
        </h1>
      </section>
      <section
        id="Contacts"
        className=" text-white h-screen bg-cyan-700 flex"
      >
        <h1 className="m-auto font-waterfall text-9xl text-black font-bold">
          Contacts
        </h1>
      </section>


    </div>
  );
}