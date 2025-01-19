import Lottie from 'lottie-react';
import loginAnime from '../../assets/login.json';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    // if (!passwordRegex.test(password)) {
    //   alert(
    //     'Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long.'
    //   );
    //   return;
    // }
    // e.target.reset();
  };

  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
        <div className="flex-1 text-center lg:text-left w-60  lg:w-[600px]">
          <Lottie animationData={loginAnime}></Lottie>
        </div>
        <div className="flex-1 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold mb-10">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
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
              <button className="btn bg-[#8fbf5b] text-white hover:text-black">
                Login
              </button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control">
              <button className="btn btn-outline border-[#8fbf5b] text-[#8fbf5b] text-base">
                <FcGoogle className="text-xl" />
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
