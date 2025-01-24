import Lottie from 'lottie-react';
import loginAnime from '../../assets/login.json';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

const Login = () => {
  const { loginWithEmail, signupWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  
  const from = location?.state || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    loginWithEmail(email, password)
      .then(() => {
        Swal.fire({
          title: 'Good job!',
          text: 'You are logged in successfully',
          icon: 'success',
        });
        navigate(from);
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Try Again',
          text: 'Wrong email or password',
        });
      });
  };

  const handleGoogle = () => {
    signupWithGoogle()
      .then(() => {
        Swal.fire({
          title: 'Good job!',
          text: 'You are logged in successfully!',
          icon: 'success',
        });
        navigate(from);
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Try Again',
          text: 'Something went wrong',
        });
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
        {/* Lottie Animation */}
        <div className="flex-1 text-center lg:text-left w-60 lg:w-[600px]">
          <Lottie animationData={loginAnime}></Lottie>
        </div>

        {/* Login Form */}
        <div className="flex-1 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold mb-10">Login now!</h1>

            {/* Email Input */}
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

            {/* Password Input */}
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

            {/* Login Button */}
            <div className="form-control mt-6">
              <button className="btn bg-[#8fbf5b] text-white hover:text-black">
                Login
              </button>
            </div>
          </form>
          <div className="card-body pt-0">
            {/* Divider and Google Login */}
            <div className="divider">OR</div>
            <div className="form-control">
              <button
                onClick={handleGoogle}
                className="btn btn-outline border-[#8fbf5b] text-[#8fbf5b] text-base"
              >
                <FcGoogle className="text-xl" />
                Login with Google
              </button>
            </div>

            {/* Register Link */}
            <p className="text-center mt-4 text-sm">
              Don&apos;t have an account?{' '}
              <Link
                to="/register"
                className="text-[#8fbf5b] font-bold hover:underline"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
