import { SlCalender } from "react-icons/sl";
import { FaPhoneVolume, FaLocationDot  } from "react-icons/fa6";
const ContactSec = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 gap-4 bg-black">
    <div className="col-span-1">
        <div className="card p-4 card-side shadow-xl">
            <figure >
                <p className="flex items-center" > <SlCalender className="text-white" ></SlCalender> </p>
            </figure>
            <div className="card-body text-white">
                <p>We are open monday-friday </p>
                <h2 className="card-title">7:00 am - 9:00 pm!</h2>
            </div>
        </div>
    </div>

    <div className="col-span-1">
        <div className="card card-side shadow-xl">
            <figure>
            <p className="flex items-center" > <FaPhoneVolume className="text-white" > </FaPhoneVolume></p>
            </figure>
            <div className="card-body text-white">
                <p>Have a question?</p>
                <h2 className="card-title">01706439736</h2>
            </div>
        </div>
    </div>

    <div className="col-span-1">
        <div className="card card-side shadow-xl">
            <figure>
                <p className="flex items-center" > <FaLocationDot className="text-white" > </FaLocationDot> </p>
            </figure>
            <div className="card-body text-white">
                <p>Need a repair? our addressk</p>
                <h2 className="card-title">Liza Street, New Yor!</h2>
            </div>
        </div>
    </div>
</div>

    </div>
  );
};

export default ContactSec;
