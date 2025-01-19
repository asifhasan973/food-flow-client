import Lottie from 'lottie-react';
import registerAnime from '../../assets/register.json';
import { FcGoogle } from 'react-icons/fc';

const Register = () => {
  const registerHandle = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const photoURL = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      alert(
        'Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long.'
      );
      return;
    }

    console.log(name, photoURL, email, password);
    e.target.reset();
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
        <div className="flex-1 text-center lg:text-left w-60  lg:w-[600px]">
          <Lottie animationData={registerAnime}></Lottie>
        </div>
        <div className="flex-1 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={registerHandle} className="card-body">
            <h1 className="text-5xl font-bold mb-10">Join With Us</h1>
            {/* name  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* photoURL  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
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
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
