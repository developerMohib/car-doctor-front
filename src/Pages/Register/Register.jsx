import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg"
const Register = () => {
    return (
        <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex">
          <div className="text-center w-1/2 mx-10 lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
            <div>
                <h1 className="text-center font-bold text-2xl pt-10" >Sign Up</h1>
            </div>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#ff3811]">Login</button>
              </div>
            <div className="text-center"> 
                <h1> Have an account ? <Link className="text-[#ff3811]" to="/login" > Sign in</Link> </h1>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;