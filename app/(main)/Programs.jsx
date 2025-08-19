import React from "react";
import { IoFitnessOutline } from "react-icons/io5";
const Programs = () => {
  return (
    <div className=" px-24 py-18 mt-24">
      <div className="flex items-center justify-between">
        <div className="flex items-start gap-12 justify-center">
          <p className="opacity-60">
          <span className="mr-2 ">——</span> Servicess
          </p>
          <h3 className="text-4xl font-bold leading-10 opacity-60 ">Our Programs</h3>
        </div>
        <IoFitnessOutline className="text-error text-4xl" />
      </div>
      <div className="mt-12">
        <div className="hero ">
          <div className="hero-content flex-col gap-24 lg:flex-row">
            <div className="lg:w-1/2">
              <ul className="steps steps-vertical">
                <li className="step step-error"><p><span className="font-bold">Beginner Bootcamp</span> – Build your foundation</p>.</li>
                <li className="step step-error"><p><span className="font-bold">Intermediate WODs</span> – For those ready to amp up intensity.</p></li>
                <li className="step step-error"><p><span className="font-bold">Elite Athlete Program</span> – Competition-level training.</p></li>
                <li className="step step-error"><p><span className="font-bold">Mobility & Recovery</span> – Keep your body moving pain-free.</p></li>
                
              </ul>
            </div>
            <img src="/programs.jpg" className="max-w-sm rounded-lg shadow-2xl hidden lg:flex" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
