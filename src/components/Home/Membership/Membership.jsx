import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    Monthly: [
      {
        id: 1,
        title: "Basic Package",
        price: 25,
        packInclude: [
          "Unlimited Gym Access",
          "2x Fitness Consultant",
          "Nutrition Tracking",
          "1x Free Suplement",
          "3 Days per week",
          "Personal Trainer",
        ],
      },
      {
        id: 2,
        title: "Mid Package",
        price: 55,
        packInclude: [
          "Unlimited Gym Access",
          "4x Fitness Consultant",
          "Nutrition Tracking",
          "3x Free Suplement",
          "5 Days per week",
          "Personal Trainer",
        ],
      },
      {
        id: 3,
        title: "Pro Package",
        price: 75,
        packInclude: [
          "Unlimited Gym Access",
          "7x Fitness Consultant",
          "Nutrition Tracking",
          "5x Free Suplement",
          "Gym Card",
          "Personal Trainer",
        ],
      },
      {
        id: 4,
        title: "Athlete Package",
        price: 105,
        packInclude: [
          "Unlimited Gym Access",
          "7x Fitness Consultant",
          "All Training Program",
          "Free Fitness Consultant",
          "Free Suplement",
          "Gym Card",
        ],
      },
    ],
    Annually: [
      {
        id: 1,
        title: "Basic Package",
        price: 250,
        packInclude: [
          "Unlimited Gym Access",
          "2x Fitness Consultant",
          "Nutrition Tracking",
          "1x Free Suplement",
          "3 Days per week",
          "Personal Trainer",
        ],
      },
      {
        id: 2,
        title: "Mid Package",
        price: 650,
        packInclude: [
          "Unlimited Gym Access",
          "4x Fitness Consultant",
          "Nutrition Tracking",
          "3x Free Suplement",
          "5 Days per week",
          "Personal Trainer",
        ],
      },
      {
        id: 3,
        title: "Pro Package",
        price: 825,
        packInclude: [
          "Unlimited Gym Access",
          "7x Fitness Consultant",
          "Nutrition Tracking",
          "5x Free Suplement",
          "Gym Card",
          "Personal Trainer",
        ],
      },
      {
        id: 4,
        title: "Athlete Package",
        price: 1150,
        packInclude: [
          "Unlimited Gym Access",
          "7x Fitness Consultant",
          "All Training Program",
          "Free Fitness Consultant",
          "Free Suplement",
          "Gym Card",
        ],
      },
    ],
  });

  return (
    <div className="mx-16 my-16">
      <h1 className="text-[#FFED00] text-2xl font-semibold">///Pricing</h1>
      <div className="mx-auto max-w-screen-2xl my-5">
        <h2 className="text-3xl text-white font-bold">
          Choose your best plan!
        </h2>
      </div>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-0 my-16">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black",
                    selected ? "bg-[#FFED00] shadow" : "text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel key={idx} className={classNames("rounded-xl p-3")}>
                <div className="w-full flex flex-wrap -mx-4">
                  <div className="md:flex w-full mb-8 sm:px-4 lg:mb-0">
                    {posts.map((post) => (
                      <div
                        className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 text-white dark:bg-gray-900  hover:bg-[#FFED00] hover:text-black transition-all duration-2000 relative"
                        key={post.id}
                      >
                        <div className="space-y-2">
                          <h4 className="text-2xl font-bold">{post.title}</h4>
                          {post.title === "Mid Package" && (
                            <p className="absolute top-8 right-0 badge badge-lg rotate-45 bg-blue-900 text-white border-0">
                              Best Package
                            </p>
                          )}
                          <span className="text-6xl font-bold">
                            ${post.price}
                          </span>
                        </div>
                        <p className="mt-3">per month annual bill.</p>
                        <ul className="flex-1 mb-6">
                          {post.packInclude.map((feature, i) => (
                            <li key={i} className="flex mb-2 space-x-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="flex-shrink-0 w-6 h-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link className="btn capitalize hover:bg-black hover:text-white hover:border-black bg-black text-white border-[#FFED00] rounded-2xl ">
                          Get {post.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
