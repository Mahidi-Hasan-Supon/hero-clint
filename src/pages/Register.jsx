import { Link, useNavigate } from "react-router";
import { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import { FiEye } from "react-icons/fi";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [pass,setPass] = useState(false)
  const {
    createUserWithEmailAndPasswordFunc,
    signInWithPopupFunc,
    updateProfileFunc,
    users,
    setLoading,
    setUsers,
  } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(displayName, photoURL, email, password);
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 characters and include at least 1 uppercase, 1 lowercase, and 1 special character"
      );
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Sign Up your account");
        navigate("/");
        updateProfileFunc(displayName, photoURL)
          .then((res) => {
            console.log(res.user);
            setUsers(null);
            toast.success("Sign Up your account");
            setTimeout(() => navigate("/"), 1500);
            navigate("/");
          })
          .catch((e) => {
            setLoading(false);
            console.log(e.message);
          });
      })
      .catch((e) => {
        console.log(e.message);
        toast.error(e.message);
        setLoading(false);
      });
  };
  const handleGoogle = () => {
    signInWithPopupFunc()
      .then((res) => {
        setLoading(false);
        console.log(res.user);
        toast.success("Sign Up your account");
        navigate("/");
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
        toast.error(e.message);
      });
  };
  const handlePass=()=>{
       setPass(!pass)
  }
  return (
    <div className="py-20">
      <div className="card bg-base-100 w-full my-10 mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-primary">Register now!</h1>

          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="name"
                className="input"
                name="name"
                placeholder="Name"
              />
              <label className="label">Photo URL</label>
              <input
                type="photo"
                className="input"
                name="photo"
                placeholder="photo"
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <label className="label">Password</label>
             <div className="relative">
               <input
                type={pass?"text":"password"}
                className="input"
                name="password"
                placeholder="Password"
              />
              <p onClick={handlePass} className="absolute -my-6 ml-75"> {pass?<FiEye></FiEye> : <FaEyeSlash></FaEyeSlash> } </p>
             </div>
              <p className="text-red-500">{error}</p>
              <button type="submit" className="btn btn-primary mt-4">
                Register
              </button>
            </fieldset>
            <div></div>
          </form>
          <div className="flex items-center text-center">
            <p className="border-t border-gray-300"></p>
            <p>Or</p>
            <p className="border-t border-gray-300"></p>
          </div>
          {/* Google */}
          <button
            onClick={handleGoogle}
            className="btn bg-white mt-3 w-full text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <div className="text-md font-semibold">
            <p>
              Already have an account?
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
