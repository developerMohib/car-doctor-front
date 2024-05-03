import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceSec = () => {
  const [servies, setServies] = useState([]);
  useEffect(() => {
    fetch(`./services.json`)
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
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={ser.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{ser.title}</h2>
                <div className="card-actions justify-between items-center ">
                <p className="text-[#FF3811]">
                  {" "}
                  <span className="font-semibold">Price</span> : {ser.price}{" "}
                </p>
                  <button className="btn text-white bg-[#FF3811] hover:p-1 btn-circle">
                    {" "}
                    <FaArrowRightLong></FaArrowRightLong>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-10">
        <button className="btn btn-outline bg-[#FF3811] ">
          {" "}
          More Servies{" "}
        </button>
      </div>
    </>
  );
};

export default ServiceSec;
