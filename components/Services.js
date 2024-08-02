import Heading from "./Heading";
import React from "react";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { servicesArr } from "../data/servicesArr";

function Services() {
  return (
    <section id="services" className="sm:container mx-auto py-10 px-4">
      <Heading title="Dienstleistungen" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {servicesArr.map((item, index) => (
          <div
            key={index}
            className="shadow-lg flex flex-col gap-4 px-8 py-10 backgroundcolor text-black rounded-2xl"
          >
            <RiLightbulbFlashLine className="text-[28px]" />
            <h2 className="font-medium text-[20px]">{item.title}</h2>

            <p
              className="services-card-txt text-txt-dark-gray"
              dangerouslySetInnerHTML={{ __html: item.text }}
            >
              {/* {item.text} */}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
