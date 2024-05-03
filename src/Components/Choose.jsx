
import delivery from "../assets/icons/deliveryt.svg"
import check from "../assets/icons/check.svg"
import Group3 from "../assets/icons/Group3.svg"
import group from "../assets/icons/group.svg"
import person from "../assets/icons/person.svg"
import Wrench from "../assets/icons/Wrench.svg"
const Choose = () => {
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

      <div className="lg:grid grid-cols-6 gap-5">
        <div className="col-span-1 text-center mx-auto p-5 ">
            <img src={group} alt="ehllo" />
            <p> Expert Team </p>
        </div>
        <div className="col-span-1 text-center mx-auto p-5 rounded-lg bg-[#ff3811]">
            <img src={Group3} alt="ehllo" />
            <p> Timely Delivery </p>
        </div>
        <div className="col-span-1 text-center mx-auto p-5 ">
            <img src={person} alt="ehllo" />
            <p> 24/7 Support </p>
        </div>
        <div className="col-span-1 text-center mx-auto p-5 ">
            <img src={Wrench} alt="ehllo" />
            <p> Best Equipment </p>
        </div>
        <div className="col-span-1 text-center mx-auto p-5 ">
            <img src={check} alt="ehllo" />
            <p> 100% Guranty </p>
        </div>
        <div className="col-span-1 text-center mx-auto p-5  ">
            <img src={delivery} alt="ehllo" />
            <p> Timely Delivery </p>
        </div>
      </div>

        </div>
    );
};

export default Choose;