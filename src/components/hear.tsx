import React from "react";
import { HearCard } from ".";
import { HearData } from "./card/constant";

const Hear = () => {
  return (
    <section className="px-24 pb-24">
      <div className="h-28 flex flex-col justify-around mb-16">
        <h5 className="text-3xl font-semibold">We’d love to hear from you</h5>
        <p>Our friendly team is always here to chat.</p>
      </div>
      <div className="flex flex-row justify-between h-72 gap-4">
        {HearData.map((hear, index) => (
          <HearCard
            title={hear.title}
            detail={hear.detail}
            icon={hear.icon}
            contact={hear.contact}
            key={hear.title + index}
          />
        ))}
      </div>
    </section>
  );
};

export default Hear;
