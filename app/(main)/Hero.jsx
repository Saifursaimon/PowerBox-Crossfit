import React from "react";

const Hero = () => {
  return (
    <div>
      <div className=" ">
        <div className=" flex my-40 mx-18 items-center flex-col lg:flex-row">
          <img src="/hero.png" className="w-1/2" />
          <div className="w-1/2 mt-12 lg:mt-0">
            <h1 className="text-4xl lg:text-5xl font-bold leading-10  lg:leading-16">
              <span className="text-error">Stronger</span> Every Rep, Tougher Every Day
            </h1>
            <button className="btn btn-outline btn-error mt-6">
              Start Training Today
            </button>
            <div className="divider my-6"></div>
            <p className=" opacity-60 ">
              CrossFit isn’t just about lifting weights — it’s about building
              discipline, resilience, and confidence that carry over into every
              part of your life. Whether you’re a complete beginner or a
              seasoned athlete, our workouts are designed to push your limits,
              break plateaus, and bring out your strongest self — inside and
              outside the gym.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
