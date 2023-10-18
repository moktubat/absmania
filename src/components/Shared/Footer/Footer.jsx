import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";
const Footer = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
    // fetch(`${import.meta.env.VITE_API_URL}/newsletter`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Your newsletter subscription has been saved.",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //       reset();
    //     }
    //   });
  };

  return (
    <div className="bg-black p-10">
      <div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-2xl text-white font-bold leading-0 m-0">
              Subscribe Newsletter
            </h1>
            <p className="text-base text-white italic leading-0 m-0">
              Subscribe your email to get latest updates.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center justify-center w-1/2 md:w-full"
          >
            <div className="flex justify-center items-center md:w-full">
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  placeholder="Your Email..."
                  className="bg-black pl-5 py-2 border-4 border-[#FFED00] outline-none rounded-s-full w-40 md:w-[25rem] lg:w-[50rem] "
                />
              </div>
              <input
                type="submit"
                value="Subscribe"
                className="bg-[#FFED00] text-black font-semibold uppercase px-5 py-3 rounded-e-full cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
      <footer className="footer p-10 text-white">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img className="w-[50px] h-[50px]" src="https://media.tenor.com/2JOBy0LSoX8AAAAi/toto-gym.gif" alt="" />
            <p className="text-2xl font-black">Catalyst Crew.</p>
          </div>
          <p className="font-normal text-base">
            Sed ut perspiciatis unde omnis natus error sit
            <br />
            voluptate santium dolorem dantium totam
            <br /> reaperia eaque ipsa quae abillo inventore
            <br />
            veritatis et quasi architecto
          </p>
          <img className="w-[180px] h-[170px]" src="https://static.vecteezy.com/system/resources/previews/024/090/564/original/fist-with-dumbbell-gym-free-png.png" alt="" />
        </div>
        <div>
          <span className="text-2xl font-black mb-4">Services</span>
          <a className="font-normal text-base link link-hover hover:text-[#FFED00] mb-3">
            Branding
          </a>
          <a className="font-normal text-base link link-hover hover:text-[#FFED00] mb-3">
            Vat Register
          </a>
          <a className="font-normal text-base link link-hover hover:text-[#FFED00] mb-3">
            Tread License
          </a>
          <a className="font-normal text-base link link-hover hover:text-[#FFED00] mb-3">
            Advertisement
          </a>
        </div>
        <div>
          <span className="text-2xl font-black mb-4">Company</span>
          <a className="font-normal text-base link link-hover hover:text-[#FFED00] mb-3">
            Consulting
          </a>
          <a className="font-normal text-base link link-hover hover:text-[#FFED00] mb-3">
            About us
          </a>
          <a className="font-normal text-base link link-hover hover:text-[#FFED00] mb-3">
            Contact
          </a>
          <a className="font-normal text-base link link-hover hover:text-[#FFED00] mb-3">
            Testimonials
          </a>
        </div>
        <div>
          <span className="text-2xl font-black mb-4">Legal</span>
          <a className="font-normal text-base link link-hover hover:text-[#FFED00] mb-3">
            Terms of use
          </a>
          <a className="font-normal text-base link link-hover hover:text-[#FFED00] mb-3">
            Privacy policy
          </a>
          <a className="font-normal text-base link link-hover hover:text-[#FFED00] mb-3">
            Cookie policy
          </a>
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:text-[#FFED00]"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:text-[#FFED00]"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:text-[#FFED00]"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          <p>Copyright © 2023 - All right reserved by Catalyst Crew Ltd</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
