import React from "react";

const Carousel = ({ card }) => {
  return (
    <div className="carousel w-full">
      {card.map((t) => {
        return (
          <div key={t.id} id={t.id} className="carousel-item relative w-full">
            <div key={t.name} className="card card-border w-80 lg:w-96 mx-auto">
              <div className="card-body">
                <h2 className="card-title">{t.header}</h2>
                <p>{t.sub}</p>
                <p className="font-bold">{t.name}</p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={t.prev} className="btn btn-outline btn-circle">
                ❮
              </a>
              <a href={t.next} className="btn btn-outline btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
