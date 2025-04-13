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

      <section className="my-30">
        <div className="container max-w-6xl gap-x-10 flex mx-auto justify-center items-center">
          <div className="leftcontent w-1/2  flex flex-col ">
            <div className="left_title text-4xl text-red-400 mb-7 ">
              <h1>Get Started Today!</h1>
            </div>
            <div className="leftpara text-sm text-gray-500  ">
              <p>
                Join many users already enjoying hassle-free electricity
                purchase with Origgin. Download the app, link your meter, and
                stay powered up with voice-enabled convenience!
              </p>
            </div>
            <div className="appstorebadges flex gap-x-5">
              <img
                src="/src/assets/googleplay.svg"
                alt=""
                className="w-[25%]"
              />
              <img src="/src/assets/appstore.svg" alt="" className="w-[25%]" />
            </div>
          </div>
          <div className="rightcontent w-1/2 ">
            <img src="/src/assets/half_phone.png" alt="" />
          </div>
        </div>
      </section>

      <section className="mb-50 bg-[#EF4472] py-20 pb-30  ">
        <div className=" text-amber-50 flex flex-col justify-center items-center ">
          <div className="section_top mb-6 text-center mx-auto">
            <div className="section_title">
              <h3 className="leading-8 font-semibold ">Why Choose Origgin</h3>
            </div>
            <div className="section_description">
              <p className="text-sm">
                We leverage on our deep knowledge and skill in technology,
                experience, quality people and functional corporate structure.
              </p>
            </div>
          </div>

          <div className="setion_content mt-20 ">
            <div className="container mx-auto flex gap-20 items-center  ">
              <div className="left_content flex flex-col gap-20">
                <div className="lccard">
                  <h3 className="font-semibold leading-8">
                    Convenience at Your Command
                  </h3>
                  <p className="text-sm">
                    Buy your prepaid meter with just your voice—anytime,
                    anywhere.
                  </p>
                  <div className="icon_box"></div>
                </div>
                <div className="lccard">
                  <h3 className="font-semibold leading-8">
                    Stay Ahead with Alerts
                  </h3>
                  <p className="text-sm">
                    Never be caught off guard. Origgin notifies you to buy on
                    schedule so you never run out.
                  </p>
                </div>
              </div>
              <div className="center_image w-[40%]">
                <img src="/src/assets/api.png.png" alt="" />
              </div>
              <div className="right_content flex flex-col gap-20">
                <div className="rccard">
                  <h3 className="leading-8 font-semibold">
                    Hassle-Free Payments
                  </h3>
                  <p className="text-sm">
                    Recharge your electricity in seconds with a variety of
                    secure payment options.
                  </p>
                </div>
                <div className="rcard">
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
      </section>

      <section className=" flex flex-col items-center text-sm">
        <div className="wrapper container flex flex-col justify-center items-center content-center mb-50">
          <div className="flex mx-auto container  items-center justify-center  ">
            <div className="left_globe  w-1/2 flex  justify-center">
              <img
                className="w-[60%] h-[80%] "
                src="/src/assets/globe.png.png"
                alt=""
              />
            </div>
            <div className="right_faq w-1/2">
              <div class="w-full mx-auto  min-h-sceen">
                <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                  {faq.map((faq, index) => (
                    <div key={index} class="py-5">
                      <details class="group " open>
                        <summary class="group rounded-lg bg-[#F9FAFB] p-5 text-[#EF4444] flex justify-between items-center font-medium cursor-pointer list-none">
                          <span>{faq.question}</span>
                          <span class="transition group-open:rotate-180">
                            <svg
                              fill="none"
                              height="24"
                              shape-rendering="geometricPrecision"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </summary>
                        <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                          {faq.answer}
                        </p>
                      </details>
                    </div>
                  ))}

                  {/* <div class="py-5">
                    <details class="group " open>
                      <summary class="group rounded-lg bg-black p-5 text-white flex justify-between items-center font-medium cursor-pointer list-none">
                        <span>How do I use the voice assistant?</span>
                        <span class="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        After linking your meter, simply activate the voice
                        feature  by clicking on the mic button at the top right
                        corner. You can then issue commands like Recharge meter
                        for instant top-up.
                      </p>
                    </details>
                  </div> */}
                  {/* <div class="py-5">
                    <details class="group" open>
                      <summary class="group rounded-lg bg-black p-5 text-white flex justify-between items-center font-medium cursor-pointer list-none">
                        <span> Can I manage multiple prepaid meters?</span>
                        <span class="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Yes, Origgin allows you to add multiple meters to one
                        account, making it easy to control electricity for
                        various properties.
                      </p>
                    </details>
                  </div>
                  <div class="py-5">
                    <details class="group" open>
                      <summary class="group rounded-lg bg-black p-5 text-white flex justify-between items-center font-medium cursor-pointer list-none">
                        <span>
                          Is it safe to make payments through Origgin?
                        </span>
                        <span class="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shape-rendering="geometricPrecision"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Yes, we use industry-standard encryption to protect all
                        your transactions and personal data.
                      </p>
                    </details>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
