import fitness from "../../assets/fitness.png";
import nutrition from "../../assets/nutrition.png";
import equipment from "../../assets/equipment.png";
import membership from "../../assets/membership.png";
import { FiMail } from "react-icons/fi";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { sendNotes } from "../../api/fetch.js";
import { toast } from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (contactInfo) => {
    console.log(contactInfo);
    sendNotes(contactInfo)
      .then((data) => {
        if (data.insertedId) {
          toast.success(`Information sent successfully`);
          reset();
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="mx-16 pt-16 pb-16">
        <div>
          <h1 className="text-xl md:text-3xl xl:text-4xl font-semibold xl:font-bold xl:tracking-wide xl:leading-snug capitalize text-[#FFED00]">
            Hi, How Can I Help You?
          </h1>
          <div className="flex flex-col xl:flex-row justify-between my-16 gap-12 items-center">
            <div className="relative hover:scale-105 duration-300">
              <div className="choose-outside">
                <div className="w-full choose-inside   pt-8 px-8 rounded-lg">
                  <div className="py-8">
                    <h2 className="text-[#FFED00] text-xl font-bold">
                      Fitness Guidance
                    </h2>
                    <p className="text-white">
                      Get customized your workout plans and guidance from
                      certified trainers to reach your fitness goals effectively
                      and efficiently.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-[60px] h-[50px] md:w-[90px] md:h-[80px] border-2 bg-black border-[#FFED00] p-4 rounded-br-[50%] absolute left-5 -top-5 md:-top-10 flex justify-center items-center ">
                <img src={fitness} alt="" />
              </div>
            </div>

            <div className="relative hover:scale-105 duration-300">
              <div className="choose-outside">
                <div className="w-full choose-inside pt-8 px-8 rounded-lg">
                  <div className="py-8">
                    <h2 className="text-[#FFED00] text-xl font-bold">
                      Nutritional Support
                    </h2>
                    <p className="text-white">
                      Access personalized meal plans and nutrition expertise
                      from specialists to optimize your health and fitness
                      journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[60px] h-[50px] md:w-[90px] md:h-[80px] border-2 bg-black border-[#FFED00] p-4 rounded-br-[50%] absolute left-5 -top-5 md:-top-10 flex justify-center items-center ">
                <img src={nutrition} alt="" />
              </div>
            </div>

            <div className="relative hover:scale-105 duration-300">
              <div className="choose-outside">
                <div className="w-full choose-inside   pt-8 px-8 rounded-lg">
                  <div className="py-8">
                    <h2 className="text-[#FFED00] text-xl font-bold">
                      Equipment and Facilities
                    </h2>
                    <p className="text-white">
                      Learn safe and efficient equipment use with expert
                      guidance to enhance your exercise routines and achieve
                      better results.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-[60px] h-[50px] md:w-[90px] md:h-[80px] border-2 bg-black border-[#FFED00] p-4 rounded-br-[50%] absolute left-5 -top-5 md:-top-10 flex justify-center items-center ">
                <img src={equipment} alt="" />
              </div>
            </div>

            <div className="relative hover:scale-105 duration-300">
              <div className="choose-outside">
                <div className="w-full choose-inside pt-8 px-8 rounded-lg">
                  <div className="py-8">
                    <h2 className="text-[#FFED00] text-xl font-bold">
                      Membership and Programs
                    </h2>
                    <p className="text-white">
                      Discover the perfect membership option tailored to your
                      fitness needs with our professional assistance and
                      support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[60px] h-[50px] md:w-[90px] md:h-[80px] border-2 bg-black border-[#FFED00] p-4 rounded-br-[50%] absolute left-5 -top-5 md:-top-10 flex justify-center items-center ">
                <img src={membership} alt="" />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-xl md:text-3xl xl:text-4xl font-semibold xl:font-bold xl:tracking-wide xl:leading-snug capitalize text-[#FFED00]">
              Contact Us
            </h1>
            <div className="md:flex justify-between my-5">
              <div className="flex flex-col items-center justify-center gap-2 mt-6 md:mt-0 md:w-96 w-4/5 py-10 bg-black hover:scale-105 duration-300 border border-[#FFED00] rounded-xl">
                <div className="bg-[#FFED00] duration-300 w-16 h-16 flex items-center justify-center rounded-full">
                  <FaMapMarkerAlt className="text-2xl text-black" />
                </div>
                <h1 className="text-lg font-bold text-white">Our Address</h1>
                <p className="text-sm text-center text-white font-light mx-3">
                  P.O. Box 152 Lakewood,
                  <br />
                  NJ 08701 New York
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 mt-6 md:mt-0 md:w-96 w-4/5 py-10 bg-black hover:scale-105 duration-300 border border-[#FFED00] rounded-xl">
                <div className="bg-[#FFED00] duration-300 w-16 h-16 flex items-center justify-center rounded-full">
                  <FiMail className="text-2xl text-black" />
                </div>
                <h1 className="text-lg font-bold text-white">
                  Send Us an Email
                </h1>
                <p className="text-sm text-center text-white font-light mx-3">
                  <a href="mailto:absmania@support.com">absmania@support.com</a>
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 mt-6 md:mt-0 md:w-96 w-4/5 py-10 bg-black hover:scale-105 duration-300 border border-[#FFED00] rounded-xl">
                <div className="bg-[#FFED00] duration-300 w-16 h-16 flex items-center justify-center rounded-full">
                  <FaPhone className="text-2xl text-black" />
                </div>
                <h1 className="text-lg font-bold text-white">
                  Send Us an Email
                </h1>
                <p className="text-sm text-center text-white font-light mx-3">
                  <a href="tel:+01 123 456 789 00">+01 123 456 789 00</a>
                </p>
              </div>
            </div>
          </div>

          <div className="my-16">
            <h1 className="text-xl md:text-3xl xl:text-4xl font-semibold xl:font-bold xl:tracking-wide xl:leading-snug capitalize text-[#FFED00]">
              Send Us a Note
            </h1>
            <div className="flex flex-col items-center gap-10 w-full my-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3 md:w-full container mx-auto"
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
                <div className="form-control md:col-span-2">
                  <input
                    type="email"
                    name="email"
                    {...register("email")}
                    required
                    placeholder="Enter Your Email"
                    className="p-4 bg-black border border-[#FFED00] focus:outline-none text-white rounded-lg md:rounded-[48px]"
                  />
                </div>
                <div className="form-control md:col-span-2">
                  <textarea
                    name="message"
                    {...register("message")}
                    required
                    cols="15"
                    rows="10"
                    placeholder="Enter you message..."
                    className="p-4 bg-black border border-[#FFED00] focus:outline-none text-white rounded-lg md:rounded-[48px]"
                  ></textarea>
                </div>
                <div className="md:col-span-2 flex justify-center">
                  <input
                    type="submit"
                    value="Send us note"
                    className="w-1/3 btn bg-[#FFED00] text-black border-black hover:bg-black hover:text-[#FFED00] hover:border-[#FFED00] 
                    md:rounded-[48px]"
                  />
                </div>
              </form>
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254272231177!2d90.3654215!3d23.7985508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c105f81691d5%3A0x4aa9bd97de918f7b!2sSher-E-Bangla%20National%20Cricket%20Stadium!5e0!3m2!1sen!2sbd!4v1692264084969!5m2!1sen!2sbd"
              className="w-full h-[65vh] border-0 rounded-lg md:rounded-[48px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
