import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthProviderContext } from "../../Provider/Provider";
import toast, { Toaster } from "react-hot-toast";
import { FaGoogle,FaTwitter,FaFacebook } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  const { login,loginWithGoogle,facebookLogin,twitterLogin } = useContext(AuthProviderContext);
  const loginSuccess = () => toast.success(" log in Successfully!");
  const loginFail = () => toast.error("Login Failed!");
const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const fV = e.target;
    const email = fV.email.value;
    const password = fV.password.value;
    fV.reset();

    // log in account
    login(email, password)
    .then((result) => {
      const user = result.user;
      loginSuccess();

      const logInUser = {email};
      console.log(logInUser, 'log in user variable')

      // token genarate 
      axios.post('http://localhost:5000/jwt', logInUser, {withCredentials:true})
      .then(res => {
        console.log(res.data)
        // navigate after log in
        if(res.data.success){
          navigate( location?.state ? location?.state : '/' )
        }
      })

    })
    .catch((error) => {
      console.error(error.message);
      loginFail();
    });
  };

  const googleLogin = () => {
    loginWithGoogle()
    .then((result) => {
      console.log(result.user);
      loginSuccess();
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }
  const facebookLoginclick = () => {
    facebookLogin()
    .then((result) => {
      console.log(result.user);
      loginSuccess();
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }
  const twitterLoginClick = () => {
    twitterLogin()
    .then((result) => {
      console.log(result.user);
      loginSuccess();
    })
    .catch((error)=>{
      console.log(error.message)
    })
  }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex">
          <div className="text-center w-1/2 mx-10 lg:text-left">
            <img src={loginImg} alt="" />
          </div>
          <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
            <div>
              <h1 className="text-center font-bold text-2xl pt-10">Sign in</h1>
            </div>
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#ff3811]">Login</button>
              </div>
              <div className="text-center">
                <h1>Or Sign In with</h1>
                <button onClick={googleLogin} className="btn mx-2 "> <FaGoogle></FaGoogle> </button>
                <button onClick={facebookLoginclick} className="btn mx-2 "> <FaFacebook></FaFacebook> </button>
                <button onClick={twitterLoginClick} className="btn mx-2 "> <FaTwitter></FaTwitter> </button>
                <h1>
                  {" "}
                  New Here ?{" "}
                  <Link className="text-[#ff3811]" to="/register">
                    {" "}
                    Sign up
                  </Link>{" "}
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Login;
