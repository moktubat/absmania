import { FaEye, FaEyeSlash } from "react-icons/fa6";
import contact from "../../../assets/contact.jpg";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { imageUpload } from "../../../api/utils";
import { saveUser } from "../../../api/auth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile, loading, setLoading, setUser, user } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    navigate(from, { replace: true });
    // photo upload
    const image = data.photo[0];
    imageUpload(image).then((imageData) => {
      const imageUrl = imageData?.data?.display_url;
      createUser(data.email, data.password)
        .then(() => {
          updateUserProfile(data.name, imageUrl)
            .then(() => {
              setUser({
                ...user,
                displayName: data.name,
                photoURL: imageUrl,
              });
              const userInfo = {
                name: data.name,
                email: data.email,
                image: imageUrl,
              };
              saveUser(userInfo).then((data) => {
                if (data.insertedId) {
                  setLoading(false);
                  toast.success(`account created successfully`);
                  reset();
                }
              });
            })
            .catch((error) => {
              console.log(error.message);
              toast.error(error.message);
              setLoading(false);
            });
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(error.message);
          setLoading(false);
        });
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="mx-16 my-16">
      <div className="mx-auto max-w-screen-2xl my-5">
        <h2 className="text-3xl text-white font-bold">
          Track Your Progress & More!
        </h2>
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
                type="text"
                name="name"
                {...register("name")}
                required
                placeholder="Enter Your Name"
                className="p-4 bg-black border border-[#FFED00] focus:outline-none text-white rounded-lg md:rounded-[48px]"
              />
              {errors.name && (
                <span className="text-white">Name field is required</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="file"
                name="photo"
                {...register("photo")}
                required
                placeholder="Enter Your Photo"
                className="p-4 bg-black border border-[#FFED00] focus:outline-none text-white rounded-lg md:rounded-[48px]"
              />
              {errors.name && (
                <span className="text-white">Name field is required</span>
              )}
            </div>
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
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Password"
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
                  {errors.password.type === "minLength" &&
                    "Password must be at least 6 characters long"}
                  {errors.password.type === "pattern" &&
                    "Password must contain at least one uppercase, one lowercase letter, one number and one special character"}
                </span>
              )}
            </div>
            <div className="form-control">
              <div className="flex p-4 items-center w-full bg-black border border-[#FFED00] rounded-lg md:rounded-[48px]">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Password"
                  className="w-full bg-black outline-none focus:outline-none text-white"
                />
                <div
                  className="cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="text-white" />
                  ) : (
                    <FaEye className="text-white" />
                  )}
                </div>
              </div>
              {errors.confirmPassword && (
                <span className="text-white">
                  {errors.password.type === "required" &&
                    "Password field is required"}
                  {errors.confirmPassword.type === "minLength" &&
                    "confirmPassword must be at least 6 characters long"}
                  {errors.confirmPassword.type === "pattern" &&
                    "Password must contain at least one uppercase, one lowercase letter, one number and one special character"}
                </span>
              )}
            </div>
            <div>
              <p className="text-white">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-white hover:text-[#FFED00] underline underline-offset-4"
                >
                  Login
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
                    value="Register"
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

export default Register;
