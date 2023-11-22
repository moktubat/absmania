import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { saveUser } from "../../../api/auth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { setUser, googleSignIn, setLoading, loading } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        const userInfo = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          image: loggedInUser.photoURL,
        };
        saveUser(userInfo).then((data) => {
          if (data.insertedId) {
            toast.success(
              `${
                loggedInUser?.displayName || "Unknown user"
              } logged in successfully`
            );
            setLoading(false);
            navigate(from, { replace: true });
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setLoading(false);
      });
  };
  return (
    <div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full font-bold text-white text-md"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin" size={24} />
          ) : (
            <>
              <p className="border flex gap-3 items-center justify-center py-2 px-4 rounded-full hover:text-black hover:bg-[#FFED00] border-[#FFED00] mr-2">
                {" "}
                <FcGoogle className="text-3xl" /> Login with google
              </p>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
