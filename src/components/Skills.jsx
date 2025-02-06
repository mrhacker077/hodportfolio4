import React from "react";
import cad from "../cad.jpeg";
import cam from "../cam.jpeg";
import fluidmechanics from "../fluidmechanics.jpg";
import machinedesign from "../machinedesign.jpeg";
import materialscience from "../materialscience.jpg";
import technicaldrawing from "../technicaldrawing.jpg";
import thermodynamics from "../thermodynamics.jpeg";
import theoryofmachine from "../theoryofmachine.avif";



function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: cad,
      name: " ",
      description:
        "CAD offers design software, 3D modeling tools, and engineering solutions for industries worldwide.",
    },
    {
      id: 2,
      logo: cam,
      name: "CAM",
      description:
        "CAM provides software and tools to automate manufacturing processes from CAD designs.",
    },
    {
      id: 3,
      logo: fluidmechanics,
      name: "Fluid mechanics",
      description:
        "Fluid mechanics is the study of fluids and their behaviors in motion and at rest, crucial for various engineering applications.",
    },
    {
      id: 4,
      logo: machinedesign,
      name: "Machine design",
      description:
        "Machine design involves creating mechanical systems and components, ensuring functionality, efficiency, and reliability in engineering applications.",
    },
    {
      id: 5,
      logo: materialscience,
      name: "Materialscience",
      description:
        "Material science is the study of materials' properties and behavior, crucial for developing durable and efficient engineering solutions.",
    },
    {
      id: 6,
      logo: technicaldrawing,
      name: "Technical drawing",
      description:
        "Technical drawing involves creating detailed visuals to communicate design specifications in engineering.",
    },
    {
        id: 7,
        logo: thermodynamics,
        name: "Thermodynamics",
        description:
          "Thermodynamics is the study of heat, energy, and their transformations in mechanical systems.",
      },
      {
        id: 8,
        logo: theoryofmachine,
        name: "Theory of machines",
        description:
          "Theory of machines is the study of mechanical systems' motion, forces, and mechanisms in engineering.",
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
