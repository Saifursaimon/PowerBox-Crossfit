import Carousel from "@/components/Carousel";
import React from "react";
import { IoHappy } from "react-icons/io5";
const Testimonial = () => {
  const testimonials = [
    {
      id: "slide1",
      header: '"Best decision I ever made!"',
      sub: '"I came in thinking CrossFit was too intense for me, but the coaches scaled everything to my level. In just 3 months, I lost 10kg, gained confidence, and now I actually look forward to training every day."',
      name: "— James R.",
      next:'#slide2',
      prev:'#slide3'
    },
    {
      id: "slide2",
      header: '"The community keeps me going."',
      sub: '"CrossFit here is more than just a workout — it’s a family. The support, energy, and motivation I get from both the trainers and members push me to give my best every time."',
      name: "— Michael T.",
      next:'#slide3',
      prev:'#slide1'
    },
    {
      id: "slide3",
      header: '"I’ve never felt this strong."',
      sub: '"The coaches are top-notch. They corrected my form, taught me Olympic lifts, and now I’m lifting more weight than I ever thought possible. My strength and endurance are on another level."',
      name: "— Daniel K.",
      next:'#slide1',
      prev:'#slide2'
    },
  ];
  return (
    <div className="bg-gray-800 text-white px-20 py-18  mt-12">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-12 justify-center">
          <p className="opacity-60 ">
            <span className="mr-2 ">——</span> Happy Clients
          </p>
          <h3 className="text-4xl font-bold leading-10 ">Testimonials</h3>
        </div>
        <IoHappy className="text-error text-4xl" />
      </div>
      <div className="mt-12 ">
        <Carousel card={testimonials}/>
      </div>
    </div>
  );
};

export default Testimonial;
