import React from 'react';
import Slider from 'react-slick';
import art1 from "../hobby/pic1.jpg";
import art2 from "../hobby/pic2.jpg";
import art3 from "../hobby/pic3.jpg";
import art4 from "../hobby/pic4.jpg";
import art5 from "../hobby/pic5.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';


const hobbies = [
  {
    id: 1,
    name: "Art",
    Image: art1,
    description: "Art-Stil Life",


  },
  {
    id: 2,
    name: "Football not soccer",
    Image: art4,
    description: "sIUUUUUUUUUUUUUUUUUU!!!!!!!!!",

  },
  {
    id: 3,
    name: "Art",
    Image: art3,
    description: "Art-Stil Life",

  },
  {
    id: 4,
    name: "Art",
    Image: art2,
    description: "Art-Stil Life",

  },
  {
    id: 5,
    name: "Music-Basuri(mostly 10 yrs)",
    Image: art5,
    description: "Wondering who is he? My flute teacher teacher(former flutist of KUTUMBA)",

  },

];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Hobby = () => {
  return (
    <section id="Hobby" className="h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-cyan-600 mb-6">Hobbies</h1>
      <div className="w-full max-w-7xl mx-auto">
        <Slider {...settings}>
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="w-full px-2">
              <div className="w-full shadow-lg rounded-md overflow-hidden bg-gray-900 my-4 p-4 hover:shadow-xl transition duration-300 relative">
                <div className="w-full relative">
                  <Image
                    src={hobby.Image}
                    alt={hobby.name}
                    width={200}
                    height={100}
                    className="w-full rounded-lg object-cover h-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-90 transition duration-300 bg-cyan-600">
                    <p className="text-white font-semibold text-center bg-black bg-opacity-70 p-2 rounded-md">
                      {hobby.description}
                    </p>
                  </div>
                </div>
                <div className="w-full text-center mt-4">
                  <h3 className="font-bold text-lg">{hobby.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hobby;