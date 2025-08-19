import React from "react";

const Trainer = () => {
  const trainers = [
    {
      name: "Alex Ramirez",
      img: "/1.jpg",
      desc: "Alex focuses on perfecting form and building raw power. From squats to snatches, he’ll help you break PRs safely and effectively.",
    },
    {
      name: "Daniel Brooks",
      img: "/2.jpg",
      desc: "Daniel thrives on intensity. His workouts test your limits, boost endurance, and sharpen your mental toughness every session.",
    },
    {
      name: "Marcus Lee",
      img: "/3.jpg",
      desc: "Marcus designs workouts that make you stronger for both the gym and everyday life — while keeping your body safe and resilient.",
    },
  ];
  return (
    <div className="mt-24">
      <h1 className="text-5xl font-bold text-center">Our Trainers</h1>
      <div className="mt-12 grid grid-cols-3 gap-12">
        {trainers.map((i) => {
          return (
            <div key={i.name} className="card bg-base-100 w-96 mx-auto shadow-sm">
              <figure className="px-10 pt-10">
                <img src={i.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{i.name}</h2>
                <p>{i.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trainer;
