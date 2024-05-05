import { Link, useLoaderData, useParams } from "react-router-dom";
import Banner from "../../Components/Banner";
import { TiArrowRight } from "react-icons/ti";
import logo from "../../assets/logo.svg";
const Service = () => {
  const serVice = useLoaderData();
  const { id } = useParams();

  // console.log(serVice, "servies");
  const filterSer = serVice?.find((item) => item._id == id);

  // console.log("useloader", filterSer);
  const { description, img, title, facility } = filterSer || {};

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
          <ul className="bg-[#FF3811] px-5 rounded-lg ">
            <li>
              <Link className="text-white"> Home </Link>
            </li>
            <li className="text-white ">Servies</li>
          </ul>
        </div>
      </div>
      <div className="lg:grid grid-cols-3 gap-5 ">
        <div className="col-span-2">
          <img src={img} alt="" />
          <h1 className="font-blod text-2xl my-3 "> {title} </h1>
          <p> {description} </p>
          <div className="grid grid-cols-2 gap-5 my-10 ">
            {facility?.map((item, id) => (
              <div
                key={id}
                className="bg-base-300 border-t border-black rounded-lg p-5 "
              >
                <h1 className="text-2xl font-semibold"> {item.name} </h1>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
          <div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there is not anything embarrassing
              hidden in the middle of text.{" "}
            </p>
            <div className="grid grid-cols-3 gap-5 my-10">
              <div className="bg-base-300 rounded-lg text-center p-5 space-y-2 ">
                <p>
                  {" "}
                  <span className="text-white p-2 bg-[#ff3811] rounded-full ">
                    01
                  </span>{" "}
                </p>
                <h1>Step One</h1>
                <p>It uses a dictionary of over 200 .</p>
              </div>
              <div className="bg-base-300 rounded-lg text-center p-5 space-y-2  ">
                <p>
                  {" "}
                  <span className="text-white p-2 bg-[#ff3811] rounded-full ">
                    02
                  </span>{" "}
                </p>
                <h1>Step Two</h1>
                <p>It uses a dictionary of over 200 .</p>
              </div>
              <div className="bg-base-300 rounded-lg text-center p-5 space-y-2  ">
                <p>
                  {" "}
                  <span className="text-white p-2 bg-[#ff3811] rounded-full ">
                    03
                  </span>{" "}
                </p>
                <h1>Step Three</h1>
                <p>It uses a dictionary of over 200 .</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-base-300 p-10 ">
          <h1 className="font-semibold mb-5 ">Services</h1>
          <div>
            <ul>
              <li className="bg-white text-gray-500 p-3 my-3 rounded-lg flex justify-between items-center hover:bg-[#ff3811] hover:text-white ">
                {" "}
                Full Car Repair{" "}
                <span>
                  {" "}
                  <TiArrowRight></TiArrowRight>{" "}
                </span>{" "}
              </li>
              <li className="bg-white text-gray-500 p-3 my-3 rounded-lg flex justify-between items-center hover:bg-[#ff3811] hover:text-white ">
                {" "}
                Engine Repair{" "}
                <span>
                  {" "}
                  <TiArrowRight></TiArrowRight>{" "}
                </span>{" "}
              </li>
              <li className="bg-white text-gray-500 p-3 my-3 rounded-lg flex justify-between items-center hover:bg-[#ff3811] hover:text-white ">
                {" "}
                Automatic Services{" "}
                <span>
                  {" "}
                  <TiArrowRight></TiArrowRight>{" "}
                </span>{" "}
              </li>
              <li className="bg-white text-gray-500 p-3 my-3 rounded-lg flex justify-between items-center hover:bg-[#ff3811] hover:text-white ">
                {" "}
                Engine Oil Change{" "}
                <span>
                  {" "}
                  <TiArrowRight></TiArrowRight>{" "}
                </span>{" "}
              </li>
              <li className="bg-white text-gray-500 p-3 my-3 rounded-lg flex justify-between items-center hover:bg-[#ff3811] hover:text-white ">
                {" "}
                Battery Charge{" "}
                <span>
                  {" "}
                  <TiArrowRight></TiArrowRight>{" "}
                </span>{" "}
              </li>
            </ul>
          </div>
          <div className="bg-black text-white p-4 rounded-lg">
            <h1 className="font-semibold">Download</h1>
            <div className="card card-side shadow-xl">
              <figure>
                <img src="logo" alt="Movie" />
              </figure>
              <div className="card-body px-1 ">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
            <div className="card card-side shadow-xl">
              <figure>
                <img src="logo" alt="Movie" />
              </figure>
              <div className="card-body px-1 ">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
          <div className="bg-black p-5 my-10 rounded-lg ">
            <div>
              {" "}
              <img src={logo} alt="" />{" "}
            </div>
            <p>Need Help? We Are Here To Help You</p>
            <div className="bg-white p-3 rounded-lg relative">
              <p>Car Doctor Special</p>
              <p>
                Save up to <span className="text-[#ff3811] ">60% off</span>{" "}
              </p>
              <button className="bg-[#ff3811] text-white absolute -bottom-5 left-1/3 px-3 py-1 rounded-lg ">
                Get A Quote
              </button>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-2xl">Price $250.00</h1>
            <Link to="/checkout" > <button className="btn w-full bg-[#ff3811]"> place to order </button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
