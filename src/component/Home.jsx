import React, { useEffect, useRef } from "react";
import pdf from "../pdf/shivam-compressed.pdf";
import my from "../assets/hero/My.jpeg";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Shivam Kumar",
        "I'm full stack developer",
        "Coder",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="container home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h2 ref={typedRef}></h2>

          <a
            href="https://drive.google.com/file/d/1uyP8Q-EpakAyKGwwRpcjxhIj0mYu5GjY/view?usp=drivesdk "
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img">
            <img src={my} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
