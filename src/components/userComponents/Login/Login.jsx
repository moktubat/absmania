import { FaEye, FaEyeSlash } from "react-icons/fa6";
import contact from "../../../assets/contact.jpg";
import { useForm } from "react-hook-form";
import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, loading, resetPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      console.log(result.user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    resetPassword(email).then(() => {
      alert("Please Check your Email");
    });
  };
  return (
    <div className="mx-16 my-16">
      <div className="mx-auto max-w-screen-2xl my-5">
        <h2 className="text-3xl text-white font-bold">Welcome Back!</h2>
        <p className="my-2 text-white text-base">
          Start your fitness journey today.
        </p>
      </div>
      <div className="w-full md:flex justify-between items-center gap-20">
        <div className="w-full my-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 w-full"
          >
            <div className="form-control">
              <input
                type="email"
                name="email"
                {...register("email")}
                required
                placeholder="Enter Your Email"
                className="p-4 bg-black border border-[#FFED00] focus:outline-none text-white rounded-lg md:rounded-[48px]"
              />
              {errors.email && (
                <span className="text-white">Email field is required</span>
              )}
            </div>
            <div className="form-control">
              <div className="flex p-4 items-center w-full bg-black border border-[#FFED00] rounded-lg md:rounded-[48px]">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  {...register("password")}
                  required
                  placeholder="Enter Your Password"
                  className="w-full bg-black outline-none focus:outline-none text-white"
                />
                <div
                  className="cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-white" />
                  ) : (
                    <FaEye className="text-white" />
                  )}
                </div>
              </div>
              {errors.password && (
                <span className="text-white">
                  {errors.password.type === "required" &&
                    "Password field is required"}
                </span>
              )}
            </div>
            <div className="flex justify-between">
              <p className="text-white">
                <Link
                  onClick={handleResetPassword}
                  className="text-white hover:text-[#FFED00] underline underline-offset-4"
                >
                  Forgot Password?
                </Link>{" "}
              </p>
              <p className="text-white">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="text-white hover:text-[#FFED00] underline underline-offset-4"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="flex justify-center mt-4">
              {loading ? (
                <AiOutlineLoading3Quarters
                  className="m-auto animate-spin text-[#FFED00] border-black hover:border-[#FFED00] cursor-pointer"
                  size={24}
                />
              ) : (
                <>
                  <input
                    type="submit"
                    value="Log In"
                    className="w-full btn bg-[#FFED00] text-black border-black hover:bg-black hover:text-[#FFED00] hover:border-[#FFED00] 
                 md:rounded-[48px] cursor-pointer"
                  />
                </>
              )}
            </div>
          </form>

          <div className="flex flex-row items-center my-8">
            <div className="flex-1 h-1 bg-white" />
            <div>
              <p className="w-16 text-center text-white">Or</p>
            </div>
            <div className="flex-1 h-1 bg-white" />
          </div>

          <SocialLogin></SocialLogin>
          <p className="text-[#847F7F] pt-2">
            By signing in, you agree to the Terms & Conditions and Privacy
            Policy
          </p>
        </div>
        <div className="hidden md:block w-full my-4">
          <img
            src={contact}
            className="w-[520px] h-[500px] rounded-lg md:rounded-[48px] object-cover object-center"
            alt=""
            loading=" lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
