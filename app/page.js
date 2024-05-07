"use client"
import React from 'react';
import NavBar from '../components/navbar'; 
import RenderList from '@/components/socialicon';
import Education from '@/components/education/education';
import Skills from '@/components/skills/skills';
import ProjectList from '@/components/projects/Projects';
import ContactForm from '@/components/contactinfo/Contactform';
import Hobby from '../components/hobby/hobby';
import Headline from '@/components/headline/headline';


export default function Home() {


  return (
    <div className="bg-black text-white custom-cursor" >
      <NavBar />
      <RenderList />
      <div>
        <Headline />
        <div className="flex flex-col mx-auto mr-2 md:mr-10 md:flex-row max-w-screen-xl">
          <div className="md:w-1/2 p-4">
            <Education />
          </div>
          <div className="md:w-1/2 p-4">
            <Skills />
          </div>
        </div>
      </div>
      <section id="Projects" className="min-h-screen bg-black text-white">
        <ProjectList />
      </section>
      <Hobby />
      <section id="Contacts" className="bg-black text-white">
        <ContactForm />
      </section>
      <div>
      <div></div>
  <div className=" text-base text-center mb-4">
    <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved | PraharshaThapa</p>
  </div>
      </div>
    </div>
  );
}
