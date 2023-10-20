import contact from "../../../assets/contact.jpg";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (contactInfo) => {
    console.log(contactInfo);
    reset();
  };
  return (
    <div className="mx-16 my-16">
      <h1 className="text-[#FFED00] text-2xl font-semibold">///Contact Us</h1>
      <div className="mx-auto max-w-screen-2xl my-5">
        <h2 className="text-3xl text-white font-bold">
          Welcome to AbsMania - Your Fitness Destination!
        </h2>
        <p className="my-2 text-white text-base">
          Have questions, feedback, or inquiries? We&apos;re here to help.
          Whether you&apos;re looking for information about our gym, <br />{" "}
          classes, trainers, or anything related to your fitness journey, our
          team is ready to assist you.
        </p>
      </div>
      <div className="w-full md:flex justify-between items-center gap-20">
        <div className="w-full my-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 w-full  "
          >
            <div className="form-control">
              <input
                type="text"
                name="name"
                {...register("name")}
                required
                placeholder="Enter Your Full Name"
                className="p-4 bg-black border border-[#FFED00] focus:outline-none text-white rounded-lg md:rounded-[48px]"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="phone"
                {...register("phone")}
                required
                placeholder="Enter Your Phone Number"
                className="p-4 bg-black border border-[#FFED00] focus:outline-none text-white rounded-lg md:rounded-[48px]"
              />
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
            </div>
            <div className="form-control">
              <textarea
                name="message"
                {...register("message")}
                required
                cols="15"
                rows="8"
                placeholder="Enter you message..."
                className="px-4 pt-10 bg-black border border-[#FFED00] focus:outline-none text-white rounded-lg md:rounded-[48px]"
              ></textarea>
            </div>
            <div className="flex justify-center mt-4">
              <input
                type="submit"
                value="Send"
                className="w-full btn bg-[#FFED00] text-black border-black hover:bg-black hover:text-[#FFED00] hover:border-[#FFED00] 
                 md:rounded-[48px]"
              />
            </div>
          </form>
        </div>
        <div className="hidden md:block w-full my-4">
          <img src={contact} className="w-[520px] h-[500px] rounded-lg md:rounded-[48px] object-cover object-center" alt="" loading=" lazy"/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
