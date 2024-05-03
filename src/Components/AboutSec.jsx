import person from "../assets/images/about_us/person.jpg"
import parts from "../assets/images/about_us/parts.jpg"
const AboutSec = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative" >
            <img className="w-3/4" src={person} alt="photo" />
            <img className="absolute -bottom-5 right-5 w-1/2 border-8 rounded-lg border-white" src={parts} alt="photo" />
          </div>
          <div className="lg:w-1/2" >
            <h1 className="text-xl text-[#FF3811] font-bold">About Us</h1>
            <h1 className="text-3xl font-bold">We are qualified & of <br/> experience in this field</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
            </p>
            <p className="py-6">
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <button className="btn bg-[#FF3811]" > Get Started </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
