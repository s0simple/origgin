import { BiServer, BiBell, BiCreditCard, BiHome } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiUserCheckBold } from "react-icons/pi";

const HowItWorks = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I use the voice assistant?",
      answer:
        "After linking your meter, simply activate the voice feature by clicking the mic button. You can then issue commands like 'Recharge meter' for instant top-up.",
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
        "Absolutely. We use bank-level encryption and secure payment gateways to protect all transactions.",
    },
  ];

  const steps = [
    {
      icon: <BiServer className="text-[#EF4472] text-2xl" />,
      title: "Download the App",
      description:
        "Available on Android, iOS and Huawei. Sign up, link your prepaid meter, and get started in minutes.",
    },
    {
      icon: <HiOutlineOfficeBuilding className="text-[#EF4472] text-2xl" />,
      title: "Voice Activation",
      description:
        "Activate our voice assistant to manage electricity with simple voice commands.",
    },
    {
      icon: <PiUserCheckBold className="text-[#EF4472] text-2xl" />,
      title: "Stay Powered Up",
      description:
        "Recharge instantly, monitor usage, and avoid power outages with smart alerts.",
    },
  ];

  const features = [
    {
      icon: <HiOutlineOfficeBuilding className="text-[#EF4472] text-lg" />,
      title: "Convenience at Your Command",
      description:
        "Buy prepaid electricity with just your voice—anytime, anywhere.",
    },
    {
      icon: <BiBell className="text-[#EF4472] text-lg" />,
      title: "Stay Ahead with Alerts",
      description: "Get notified to buy on schedule so you never run out.",
    },
    {
      icon: <BiCreditCard className="text-[#EF4472] text-lg" />,
      title: "Hassle-Free Payments",
      description: "Recharge in seconds with secure payment options.",
    },
    {
      icon: <BiHome className="text-[#EF4472] text-lg" />,
      title: "Multi-Meter Control",
      description: "Manage all your meters from one account.",
    },
  ];

  return (
    <div className="relative">
      {/* How It Works Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EF4472] mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started with ORIGGIN in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 py-12 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#EF4472]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EF4444] mb-4">
              Get Started Today!
            </h2>
            <p className="text-gray-600 mb-6">
              Join thousands enjoying hassle-free electricity purchase with
              Origgin.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Download on Google Play">
                <img
                  src="/assets/googleplay.svg"
                  alt="Google Play"
                  className="h-24 hover:scale-105 transition-transform"
                />
              </a>
              <a href="#" aria-label="Download on the App Store">
                <img
                  src="/assets/appstore.svg"
                  alt="App Store"
                  className="h-24 hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/assets/half_phone.png"
              alt="ORIGGIN app preview"
              className="max-w-[240px] md:max-w-[380px] drop-shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-[#EF4472] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Why Choose Origgin?
            </h2>
            <p className="opacity-90 max-w-2xl mx-auto">
              We leverage our expertise in technology to deliver the best
              service.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 p-5 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2.5 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm opacity-90">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div className="setion_content mt-20 ">
            <div className="container mx-auto flex gap-10 items-center  ">
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
              <div className="center_image min-w-[10%]">
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

      {/* FAQ Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl ">
          {" "}
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <p className="opacity-90 max-w-2xl mx-auto">
              Find answers to many of your questions and more. If you have any
              questions, feedback, or inquiries, please do not hesitate to reach
              out to us.{" "}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/assets/globe.png"
                alt="ORIGGIN global accessibility"
                className="max-w-[200px] md:max-w-[240px]"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2">
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <details
                    key={faq.id}
                    className="border-b border-gray-200 pb-3"
                  >
                    <summary className="flex justify-between items-center cursor-pointer py-2">
                      <h3 className="text-base font-medium text-gray-800 group-hover:text-[#EF4444]">
                        {faq.question}
                      </h3>
                      <svg
                        className="w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform"
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
                    <p className="mt-1 text-gray-600 text-sm">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
