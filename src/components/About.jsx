import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Personal Info Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Personal Information
          </h2>
          <p className="text-gray-700">
            Hello everyone, my name is Deepak G.Talekar, and I am the Head of
            the Civil Engineering Department here at Karnataka Govt.
            Polytechnic. I was born on 01/07/1967 in Karwar, Uttara
            Kannada,Karnataka.
          </p>
          <p className="mt-4 text-gray-700">
            Hobbies: Playing cricket, reading newspapers and novels.
          </p>
        </div>

        {/* Education Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Education & Training
          </h2>
          <p className="text-gray-700">
            I have completed my Bachelor of Engineering (B.E.) in Civil
            Engineering and Master of Engineering (M.E.) in Foundations. <br /> I am
            also an Associate Member of the Institution of Engineers (AMIE),
            India, and a Chartered Engineer from the Institution of Engineers,
            Kolkata.
          </p>
        </div>

        {/* Skills Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
          Mission Statement
          </h2>
          <p className="text-gray-700">
          My mission is to leverage my expertise and creativity to deliver innovative civil engineering solutions that exceed client expectations, enhance infrastructure quality, and contribute positively to the built environment.
          </p>
        </div>

        {/* Experience Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Professional (Academic) Experience
          </h2>
          <p className="text-gray-700">
            • Possesses over 22 years of teaching experience in the field of
            Civil Engineering. <br />
            • Currently serving as the Head of the Department
            (HoD), Civil Engineering. <br />
            • Instrumental in developing academic
            curricula, mentoring students, and leading the department towards
            excellence. <br />
            • Engaged in continuous academic improvement, student
            mentoring, and research-oriented learning approaches.
          </p>
        </div>

        {/* experience Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Professional (Industrial) Experience
          </h2>
          <p className="text-gray-700">
          • Site Engineer (2 years): Executed projects, gaining hands-on experience. <br />
          • Project Engineer (2 years): Managed structural designs and construction methodologies. <br />
          • Project Manager (5 years): Led large-scale projects from planning to completion. <br />
          • Supervised residential and infrastructure projects, ensuring quality and safety. <br />
          • Directed pile foundation projects for bridges in Konkan Railways, emphasizing precision engineering and structural stability.
          </p>
        </div>

        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
          Achievements & Awards

          </h2>
          <p className="text-gray-700">
          • Academic Excellence: Secured 3rd rank in M.E. (Foundation Engineering) from Goa University. <br /> 
          • Administrative Leadership: Served as Internal Quality Assurance Cell (IQAC) Coordinator and National Board of Accreditation (NBA) Coordinator, leading initiatives to enhance educational standards and institutional excellence. <br />
          • Conducted concrete mix designs for prestigious projects, including the Nuclear Power Plant in Kaiga, Karwar; the Naval Base Project Seabird in Karwar; and the Fishing Harbour in Amadalli, Karwar.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
