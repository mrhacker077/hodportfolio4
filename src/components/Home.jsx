import React from "react";

import pic from "../ce.jpg";


function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div
            className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <span className="text-red-700 font-bold">Lecturer</span>
            </div>

            <br />
            <p className="text-sm md:text-xl text-justify">
            My name is Deepak G. Talekar, and I proudly serve as the Head of the Civil Engineering Department at Karnataka Govt. Polytechnic. I dedicate my passion and expertise to the field of civil engineering, a discipline that shapes the world through innovation and resilience. Committed to building a better future, I strive to empower aspiring engineers with the knowledge and skills needed to design sustainable infrastructure, advance technology, and contribute to the progress of society. Through education and innovation, I aim to uphold the legacy of civil engineering as the foundation of modern civilization.
            </p>
          </div>
          <div
            className="md:w-1/3 md:ml-48 md:mt-30 mt-8 order-1"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src={pic}
              className="rounded-full md:w-[400px] md:h-[400px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
