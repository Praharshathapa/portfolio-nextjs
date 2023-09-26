"use client"
import React from 'react';
import NavBar from '@/components/NavBar.jsx';
import RenderList from '@/components/socialicon';
import Education from '@/components/education/education';
import Skills from '@/components/skills/skills';
import ProjectList from '@/components/projects/Projects';
import ContactForm from '@/components/contactinfo/Contactform';
import Hobby from '../components/hobby/hobby';
import Headline from '@/components/headline/headline';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <div className='custom-cursor z-5'>
      <div className="min-h-screen">
        <NavBar />
        <RenderList />

        <Headline />
        <div className="flex flex-col mx-auto mr-2 md:mr-10 md:flex-row max-w-screen-xl">
          <div className="md:w-1/2 p-4">
            <Education />
          </div>
          <div className="md:w-1/2 p-4">
            <Skills />
          </div>
        </div>
        <section id="Projects" className="min-h-screen bg-cyan-600 ">
          <ProjectList />
        </section>
        <section id="Hobby" className=" min-h-screen   ">
          <Hobby />
        </section>
        <section id="Contacts" className=" min-h-screen  bg-cyan-600">
          <ContactForm />
        </section>
        <Footer/>
      </div>
    </div >
  );
}
