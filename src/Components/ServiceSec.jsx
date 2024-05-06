import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceSec = () => {
  const [servies, setServies] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServies(data);
      });
  }, []);
  console.log(servies, "data");

  return (
    <>
      <div className="lg:w-1/2 mx-auto my-10 ">
        <div className="text-center" >
        <h1 className="text-xl text-[#FF3811] font-bold">Service</h1>
        <h1 className="text-3xl font-bold">
        Our Service Area
        </h1>
        <p className="py-6">
        the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
        </p>
        </div>
      </div>

      <div className="lg:grid grid-cols-3 gap-5">
        {servies?.map((ser) => (
          <div key={ser._id}>
            {/* <p> hello vai {ser.title} </p> */}
            <Link to={`/service/${ser._id}`} >
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={ser.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{ser.title}</h2>
                <p className="text-[#FF3811]">
                  {" "}
                  <span className="font-semibold">Price</span> : {ser.price}{" "}
                </p>
                <div className="card-actions justify-between items-center ">
                
                <Link to={`/service/${ser._id}`} >
                  <button className="btn text-white bg-[#FF3811]"> details
                    {" "}
                    <FaArrowRightLong></FaArrowRightLong>{" "}
                  </button>
                </Link>
                <Link to={`/checkout/${ser._id}`} >
                  <button className="btn text-white bg-[#FF3811]"> book now
                    {" "}
                    <FaArrowRightLong></FaArrowRightLong>{" "}
                  </button>
                </Link>
                </div>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center my-10">
        <Link to='/service' >
        <button className="btn btn-outline bg-[#FF3811] ">
          {" "}
          More Servies{" "}
        </button> 
        </Link>
      </div>
    </>
  );
};

export default ServiceSec;
