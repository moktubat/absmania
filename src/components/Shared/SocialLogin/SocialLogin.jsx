import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SocialLogin = () => {
  const { setUser, googleSignIn, setLoading, loading } =
    useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          image: loggedInUser.photoURL,
        };
        saveUser(saveUser).then((data) => {
          if (data.insertedId) {
            toast.success(
              `${
                loggedInUser?.displayName || "Unknown user"
              } logged in successfully`
            );
            setLoading(false);
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
      <div className="text-center">
        <button
          onClick={handleGoogleSignIn}
          className="w-10 h-10 mt-4 items-center justify-center inline-flex rounded-full font-bold text-blue-700 text-lg border-2 border-blue-700"
        >
          {loading ? (
            <AiOutlineLoading3Quarters
              className="m-auto animate-spin"
              size={24}
            />
          ) : (
            <>
              <FcGoogle className="text-4xl  bg-white rounded " />
            </>
          )}
        </button>
        <p className="text-gray-100 pt-2">
          <div className="divider">OR</div> use email your account
        </p>
      </div>
    </div>
  );
};

export default SocialLogin;
