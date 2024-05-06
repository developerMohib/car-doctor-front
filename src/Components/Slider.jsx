import slider1 from "../assets/images/banner/5.jpg";
import slider2 from "../assets/images/banner/2.jpg";
import slider3 from "../assets/images/banner/3.jpg";
import slider4 from "../assets/images/banner/4.jpg";
import slider6 from "../assets/images/banner/6.jpg";
import slider5 from "../assets/images/banner/1.jpg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const Slider = () => {
  return (
    <div className="relative " >
      <div className="carousel w-full md:h-[600px] ">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={slider1} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 space-x-4 z-50 ">
            <a href="#slide6" className="btn btn-circle">
              {" "}
              <FaArrowLeftLong></FaArrowLeftLong>{" "}
            </a>
            <a href="#slide2" className="btn btn-circle">
              {" "}
              <FaArrowRightLong></FaArrowRightLong>{" "}
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slider2} className="w-full" />
          <div  className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 space-x-4 z-50 ">
            <a href="#slide1" className="btn btn-circle">
            <FaArrowLeftLong></FaArrowLeftLong>{" "}
            </a>
            <a href="#slide3" className="btn btn-circle">
            <FaArrowRightLong></FaArrowRightLong>{" "}
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slider3} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 space-x-4 ">
            <a href="#slide2" className="btn btn-circle">
            <FaArrowLeftLong></FaArrowLeftLong>{" "}
            </a>
            <a href="#slide4" className="btn btn-circle">
            <FaArrowRightLong></FaArrowRightLong>{" "}
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src={slider4} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 space-x-4 z-50 ">
            <a href="#slide3" className="btn btn-circle">
            <FaArrowLeftLong></FaArrowLeftLong>{" "}
            </a>
            <a href="#slide5" className="btn btn-circle">
            <FaArrowLeftLong></FaArrowLeftLong>{" "}
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={slider5} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 space-x-4 z-50 ">
            <a href="#slide4" className="btn btn-circle">
            <FaArrowLeftLong></FaArrowLeftLong>{" "}
            </a>
            <a href="#slide6" className="btn btn-circle">
            <FaArrowLeftLong></FaArrowLeftLong>{" "}
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={slider6} className="w-full" />
          <div className="absolute flex justify-end transform md:-translate-y-1/2 left-5 right-5 bottom-5 md:space-x-4 z-50 ">
            <a href="#slide5" className="btn btn-circle">
            <FaArrowLeftLong></FaArrowLeftLong>{" "}
            </a>
            <a href="#slide1" className="btn btn-circle">
            <FaArrowLeftLong></FaArrowLeftLong>{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute flex items-center top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full w-full overflow-hidden " >
        <div className="md:ml-10 ml-5 space-y-10">
        <div className="text-white md:w-1/2" >
        <h1 className="font-bold md:text-5xl text-2xl ">
          Affordable Price For Car Servicing
        </h1>
        <p className="md:my-10" >
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        </div>
        <div className="md:space-x-5 "> 
            <button className="btn bg-[#FF3811] " > Discover More </button>
            <button className="btn bg-[rgba(21,21,21,0)] text-white  " > Latest Project </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
