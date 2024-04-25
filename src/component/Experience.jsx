import React from "react";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>Education</h1>

        <div
          className="ex-items text-center my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="left">
            <h2>Muzaffarpur Institute of Technology,</h2>
            <h4> Information Technology (B.tech)</h4>
          </div>
          <div className="right">
            <h2>2021-25</h2>
            <h4>
              <span style={{ color: "yellowgreen" }}></span>{" "}
              <span style={{ color: "yellow" }}></span>
            </h4>
            <h5 style={{ color: "yellow" }}>CGPA: 7.72</h5>
          </div>
        </div>
        <div
          className="ex-items text-center my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="left">
            <h2>K.L.S College, Nawada</h2>
            <h4> Intermediate (PCM)</h4>
          </div>
          <div className="right">
            <h2>2018-20</h2>
            <h4>
              <span style={{ color: "yellowgreen" }}></span>{" "}
              <span style={{ color: "yellow" }}></span>
            </h4>
            <h5 style={{ color: "yellow" }}>Percentage: 84.2</h5>
          </div>
        </div>
        <div
          className="ex-items text-center my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="left">
            <h2>Bapu Inter High School,Nawada </h2>
            <h4> Matriculation (BSEB)</h4>
          </div>
          <div className="right">
            <h2>2017-18</h2>
            <h4>
              <span style={{ color: "yellowgreen" }}></span>{" "}
              <span style={{ color: "yellow" }}></span>
            </h4>
            <h5 style={{ color: "yellow" }}>Percentage: 74.4</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
