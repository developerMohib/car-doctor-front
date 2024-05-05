import { Link } from "react-router-dom";
import Banner from "../../Components/Banner";

const CheckOut = () => {
  return (
    <div>
      <div className="relative my-10">
        <Banner> </Banner>
        <div className=" bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] absolute h-full w-full top-0 left-0">
          <h1 className="font-bold text-2xl text-white absolute left-[10%] top-1/2 ">
            Check Out
          </h1>
        </div>
        <div className="text-xl items-center justify-center py-0 flex breadcrumbs mx-auto">
          <ul className="bg-[#FF3811] px-5 rounded-lg ">
            <li>
              <Link className="text-white"> Home </Link>
            </li>
            <li className="text-white ">Check Out </li>
          </ul>
        </div>
      </div>

      {/* from */}
      <div className="bg-base-300 p-10 w-4/5 mx-auto rounded-lg ">
        <form className="space-y-3" >
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="w-full" htmlFor="name">
                First Name
              </label>
              <input className="w-full p-2 rounded-lg" type="text" name="firstName" id="name" />
            </div>
            <div className="w-1/2">
              <label className="w-full" htmlFor="name">
                Last Name
              </label>
              <input className="w-full p-2 rounded-lg" type="text" name="lastName" id="name" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="w-full" htmlFor="phone">
                Your Phone
              </label>
              <input className="w-full p-2 rounded-lg" type="number" name="phone" id="phone" />
            </div>
            <div className="w-1/2">
              <label className="w-full" htmlFor="email">
                Email
              </label>
              <input className="w-full p-2 rounded-lg" type="email" name="email" id="email" />
            </div>
          </div>
          <div>
            <label className="w-full" htmlFor="text">
              Messege
            </label>
            <textarea className="w-full p-2 rounded-lg" name="textarea" id="text">
              Messegae
            </textarea>
          </div>
          <div>
            <input className="btn bg-[#ff3811] text-white w-full " type="submit" value="Order Confirmed" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
