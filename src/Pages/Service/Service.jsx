import { Link } from "react-router-dom";
import Banner from "../../Components/Banner";

const Service = () => {
  return (
    <div>
      <div className="relative my-10">
        <Banner> </Banner>
        <div className=" bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute h-full w-full top-0 left-0">
          <h1 className="font-bold text-2xl text-white absolute left-[10%] top-1/2 ">
            Service Details
          </h1>
        </div>
        <div className="text-xl items-center justify-center py-0 flex breadcrumbs mx-auto">
          <ul className="bg-[#FF3811] px-5 rounded-lg " >
            <li>
              <Link className="text-white" > Home </Link>
            </li>
            <li  className="text-white " >Servies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
