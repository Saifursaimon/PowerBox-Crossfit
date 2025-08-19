import React from "react";
import { GoDotFill } from "react-icons/go";
const About = () => {
  return (
    <div className="bg-gray-800 text-white px-20 py-18">
      <div className="flex items-start gap-12 justify-center">
        <p>
          <span className="mr-2">——</span> About Us
        </p>
        <h3 className="text-2xl font-medium leading-10  w-2/3">
          We’re not just a gym — we’re a community of athletes, united by grit,
          sweat, and determination. Our certified CrossFit coaches push you to
          go beyond your comfort zone, safely and effectively.
        </h3>
      </div>
      <div className="mt-12">
        <div className="hero ">
          <div className="hero-content flex-col gap-24 lg:flex-row">
            <img src="/about.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div className="w-1/2">
              <GoDotFill className="opacity-60" />
              <p className="py-6 opacity-60">
                We believe fitness is more than just training — it’s a mindset.
                At [Your Brand Name], we combine high-intensity CrossFit
                workouts with expert coaching and a supportive community that
                pushes you to achieve more than you thought possible. Every rep,
                every sweat drop, every challenge builds not just strength, but
                confidence and resilience. Join us, and discover a place where
                athletes of all levels train hard, grow stronger, and never back
                down.
              </p>
              <div className="divider my-6 divider-error" />
              <div className="stats w-full">
                <div className="stat place-items-center">
                  <div className="stat-value">31K+</div>
                  <div className="stat-desc text-white opacity-60">
                    Fitness Trainer
                  </div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-value">3.1m+</div>
                  <div className="stat-desc text-white opacity-60">
                    Train Area
                  </div>
                </div>
                <div className="stat place-items-center">
                  <div className="stat-value">3K+</div>
                  <div className="stat-desc text-white opacity-60">
                        Our Customer
                  </div>
                </div>

               

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
