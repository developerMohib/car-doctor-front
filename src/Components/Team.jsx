import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import mem1 from "../../src/assets/images/team/1.jpg";
import mem2 from "../../src/assets/images/team/2.jpg";
import mem3 from "../../src/assets/images/team/3.jpg";
const Team = () => {
  return (
    <div>
      <div className="lg:w-1/2 mx-auto my-10 ">
        <div className="text-center">
          <h1 className="text-xl text-[#FF3811] font-bold">Meet Out Team</h1>
          <h1 className="text-3xl font-bold">Browse Our Products</h1>
          <p className="py-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full text-gray-900">
        <button
          aria-label="Slide back"
          type="button"
          className="absolute left-0 z-30 p-2 ml-10 bg-opacity-50 rounded-full focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-gray-50"
        >
          <MdOutlineArrowBackIos> </MdOutlineArrowBackIos>
        </button>
        <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={mem1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Car Engine Plug</h2>
                <p>Engine Expert</p>
                <div className=" flex items-center justify-around ">
                  <Link>
                    {" "}
                    <FaFacebook> </FaFacebook>{" "}
                
                  </Link>
                  <Link>
                    {" "}
                    <FaFacebook> </FaFacebook>{" "}
                
                  </Link>
                  <Link>
                    {" "}
                    <FaFacebook> </FaFacebook>{" "}
                
                  </Link>
                  <Link>
                    {" "}
                    <FaFacebook> </FaFacebook>{" "}
                
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={mem2} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Car Engine Plug</h2>
                <p>Engine Expert</p>
                <div className="flex items-center justify-around">
                <Link>
                    {" "}
                    <FaFacebook> </FaFacebook>{" "}
                
                  </Link>
                  <Link>
                    {" "}
                    <FaFacebook> </FaFacebook>{" "}
                
                  </Link>
                  <Link>
                    {" "}
                    <FaFacebook> </FaFacebook>{" "}
                
                  </Link>
                  <Link>
                    {" "}
                    <FaFacebook> </FaFacebook>{" "}
                
                  </Link>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-shrink-0 w-full sm:w-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={mem3} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Car Engine Plug</h2>
                <p>Engine Expert</p>
                <div className="flex justify-around items-center" > 
                <Link>
                    {" "}
                    <FaFacebook> </FaFacebook>{" "}
                
                  </Link>
                  <Link>
                    {" "}
                    <FaFacebook> </FaFacebook>{" "}
                
                  </Link>
                  <Link>
                    {" "}
                    <FaFacebook> </FaFacebook>{" "}
                
                  </Link>
                  <Link>
                    {" "}
                    <FaFacebook> </FaFacebook>{" "}
                
                  </Link>
                </div>
                </div>
            </div>
          </div>
        </div>
        <button
          aria-label="Slide forward"
          id="next"
          className="absolute right-0 z-30 p-2 mr-10 bg-opacity-50 rounded-full focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-gray-50"
        >
          <MdArrowForwardIos> </MdArrowForwardIos>
        </button>
      </div>
  );
};

export default Team;
