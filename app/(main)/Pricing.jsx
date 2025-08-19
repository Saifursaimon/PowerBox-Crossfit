import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Basic Plan",
      price: "$49/month",
      description:
        "Perfect for beginners looking to start their CrossFit journey.",
      features: [
        "3 classes per week",
        "Access to group workouts",
        "Basic mobility sessions",
        "Community support",
      ],
      cta: "Get Started",
    },
    {
      title: "Standard Plan",
      price: "$79/month",
      description:
        "Best value for consistent athletes who want unlimited access.",
      features: [
        "Unlimited classes",
        "Free mobility & recovery sessions",
        "Access to all WODs",
        "Progress tracking",
      ],
      cta: "Join Now",
      selected:true
    },
    {
      title: "Elite Plan",
      price: "$129/month",
      description:
        "For serious athletes who want personalized coaching and results.",
      features: [
        "Unlimited classes",
        "1-on-1 personal coaching",
        "Nutrition guidance",
        "Priority booking for events",
        "Exclusive athlete workshops",
      ],
      cta: "Go Elite",
    },
  ];

  return (
    <div className="mt-24 px-24">
      <h1 className="text-5xl font-bold text-center">Our Pricing</h1>
      <div className="mt-12 grid grid-cols-3 gap-12">
        {pricingPlans.map((i) => {
          return (
            <div key={i.title} className={i.selected ? "card w-96 mx-auto bg-white shadow-sm" : "card w-80 lg:w-96 mx-auto bg-base-100 shadow-sm"}>
              <div className="card-body">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">{i.title}</h2>
                  <span className="text-xl">{i.price}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs h-[120px]">
                  {i.features.map((f) => {
                    return (
                      <li key={f}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{f}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6">
                  <button className={i.selected ? "btn btn-error text-white btn-block" : "btn btn-error btn-outline btn-block"}>{i.cta}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
