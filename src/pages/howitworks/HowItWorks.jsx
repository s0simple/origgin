import HiwCArds from "./HiwCArds";
import { BiServer } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiUserCheckBold } from "react-icons/pi";

const HowItWorks = () => {
  const faq = [
    {
      id: 1,
      question: "How do I use the voice assistant?",
      answer:
        " After linking your meter, simply activate the voice feature by clicking on the mic button at the top right corner. You can then issue commands like Recharge meter for instant top-up.",
    },
    {
      id: 2,
      question: "Can I manage multiple prepaid meters?",
      answer:
        "Yes, Origgin allows you to add multiple meters to one account, making it easy to control electricity for various properties.",
    },
    {
      id: 3,
      question: "Is it safe to make payments through Origgin?",
      answer:
        "Yes, Origgin allows you to add multiple meters to one account, making it easy to control electricity for various properties.",
    },
  ];

  const card = [
    {
      icon: <BiServer className="text-[#EF4472] text-3xl" />,
      title: "Download the Origgin App",
      Description:
        "Available on Android, iOS and Huawei, the Origgin app is your gateway to easy electricity purchase. Sign up, link your prepaid meter, and get started in minutes.",
    },
    {
      icon: <HiOutlineOfficeBuilding className="text-[#EF4472] text-3xl" />,
      title: "Voice Activation",
      Description:
        "Once your account is set up, activate Sona, our voice assistant feature to manage your electricity by simply speaking commands. Recharging has never been easier!",
    },
    {
      icon: <PiUserCheckBold className="text-[#EF4472] text-3xl" />,
      title: "Stay Powered Up",
      Description:
        "Whether you're at home or on the go, Origgin ensures you're always in control of your electricity consumption. Recharge instantly, monitor usage, and avoid sudden power outages with our smart alerts.",
    },
  ];

  return (
    <div>
      <section class="mx-auto container max-w-6xl flex justify-center my-40">
        <div class="">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4">
              <div class="text-center mx-auto mb-12 lg:mb-20 max-w-3xl">
                <span class="font-semibold text-2xl text-primary mb-2 block">
                  How it Works
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap mx-4 text-sm mt-10 ">
            {card.map((carditem, id) => (
              <div key={id} class="w-full md:w-1/2 lg:w-1/3 px-4 ">
                <div className="p-10 bg-white md:px-7 xl:px-10 rounded-[20px]  hover:shadow-lg mb-8 grid grid-cols-1 justify-items-center text-center gap-5">
                  <div className="p-8 bg-[#DC26260D] w-fit  ">
                    {carditem.icon}
                  </div>
                  <h4 class="font-semibold text-xl text-dark  leading-relaxed ">
                    {carditem.title}
                  </h4>
                  <p class="text-gray-500 ">{carditem.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#EF4444] mb-6">
              Get Started Today!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of users already enjoying hassle-free electricity
              purchase with Origgin. Download the app, link your meter, and stay
              powered up with voice-enabled convenience!
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" aria-label="Download on Google Play">
                <img
                  src="/assets/googleplay.svg"
                  alt="Google Play"
                  className="h-32 hover:scale-105 transition-transform"
                />
              </a>
              <a href="#" aria-label="Download on the App Store">
                <img
                  src="/assets/appstore.svg"
                  alt="App Store"
                  className="h-32 hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/assets/half_phone.png"
              alt="ORIGGIN app preview"
              className="max-w-xs md:max-w-md drop-shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#EF4472] text-white  ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Origgin?
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We leverage our deep knowledge in technology, experience, and
              quality service to deliver the best.
            </p>
          </div>

          <div className="setion_content mt-20 ">
            <div className="container mx-auto flex gap-20 items-center  ">
              <div className="left_content flex flex-col gap-20">
                <div className="lccard flex gap-8">
                  <div>
                    <h3 className="font-semibold leading-8">
                      Convenience at Your Command
                    </h3>
                    <p className="text-sm">
                      Buy your prepaid meter with just your voice—anytime,
                      anywhere.
                    </p>
                  </div>

                  <div className="icon_box p-5 bg-[#FEE2E2] rounded w-fit h-fit">
                    <HiOutlineOfficeBuilding
                      style={{ color: "#EF4472", fontSize: "20px" }}
                    />
                  </div>
                </div>
                <div className="lccard flex gap-x-8">
                  <div>
                    <h3 className="font-semibold leading-8">
                      Stay Ahead with Alerts
                    </h3>
                    <p className="text-sm">
                      Never be caught off guard. Origgin notifies you to buy on
                      schedule so you never run out.
                    </p>
                  </div>

                  <div className="icon_box p-5  bg-[#FEE2E2] h-fit rounded w-fit">
                    <HiOutlineOfficeBuilding
                      style={{ color: "#EF4472", fontSize: "20px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="center_image min-w-[20%]">
                <img src="/assets/api.png.png" alt="" />
              </div>
              <div className="right_content flex flex-col gap-20">
                <div className="rccard flex gap-x-8">
                  <div className="icon_box p-5  h-fit bg-[#FEE2E2] rounded w-fit">
                    <HiOutlineOfficeBuilding
                      style={{ color: "#EF4472", fontSize: "20px" }}
                    />
                  </div>
                  <div>
                    <h3 className="leading-8 font-semibold">
                      Hassle-Free Payments
                    </h3>
                    <p className="text-sm">
                      Recharge your electricity in seconds with a variety of
                      secure payment options.
                    </p>
                  </div>
                </div>
                <div className="rcard flex gap-x-8 items-start gap-20">
                  <div className="icon_box p-5 bg-[#FEE2E2] h-fit rounded w-fit">
                    <HiOutlineOfficeBuilding
                      style={{ color: "#EF4472", fontSize: "20px" }}
                    />
                  </div>
                  <div>
                    {" "}
                    <h3 className="leading-8 font-semibold">
                      Multi-Meter Control
                    </h3>
                    <p className="text-sm">
                      Perfect for users with multiple properties or business
                      owners. Manage all your meters with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/assets/globe.png"
              alt="ORIGGIN global accessibility"
              className="max-w-xs md:max-w-md"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faq.map((faq) => (
                <details
                  key={faq.id}
                  className="group border-b border-gray-200 pb-4"
                >
                  <summary className="flex justify-between items-center cursor-pointer py-3">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#EF4444]">
                      {faq.question}
                    </h3>
                    <svg
                      className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
