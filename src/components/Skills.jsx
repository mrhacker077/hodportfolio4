import React from "react";
import se from "../se.jpg";
import pg from "../pg.jpg";
import ce from "../ce.png";



function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: se,
      name: "Site engineer ",
      description:
        "A Site Engineer oversees construction, ensuring design and safety compliance while managing execution and issues.",
    },
    {
      id: 2,
      logo: pg,
      name: "Project guidance",
      description:
        "Project guidance supports planning, execution, and problem-solving to meet deadlines and quality standards.",
    },
    {
      id: 3,
      logo: ce,
      name: "Chartered engineer",
      description:
        "A Chartered Engineer is a certified professional with expertise in engineering, innovation, and leadership.",
    },
    
  ];

  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-4xl font-bold mb-5">Skills</h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 my-5"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 bg-blue-200"
              key={id}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src={logo}
                className="w-[140px] h-[140px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
