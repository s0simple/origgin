import { FaRegCheckCircle } from "react-icons/fa";
import { BiServer, BiChip } from "react-icons/bi";
import {
  HiOutlineOfficeBuilding,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import { PiUserCheckBold } from "react-icons/pi";
// import Head from "next/head";

const Company = () => {
  const focusAreas = [
    {
      icon: <BiChip className="text-[#EF4472] text-3xl" />,
      title: "Technology",
      description:
        "We create ground-breaking technologies that enable the manufacturing, distribution, selling and consumption of electricity in Africa.",
    },
    {
      icon: <HiOutlineOfficeBuilding className="text-[#EF4472] text-3xl" />,
      title: "Infrastructure",
      description:
        "We build reliable systems and structures that scale the availability and accessibility of electricity to everyone in Africa.",
    },
    {
      icon: <HiOutlineLightningBolt className="text-[#EF4472] text-3xl" />,
      title: "Products",
      description:
        "We create high-quality products that enhance the customer experience, making electricity usage seamless and enjoyable.",
    },
  ];

  const team = [
    {
      image: "/assets/avater1.png",
      name: "Kane Mani, CEO & CTO",
      decription:
        "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
      membersince: "Co-founded Origgin in 2010",
      designition1: 'Patron of A "Day In Tech"',
      designation2: "Co-founder & CEO at Gudu Studios",
    },
  ];

  return (
    <>
      {/* <Head>
        <title>About ORIGGIN - Energy Technology Company</title>
        <meta
          name="description"
          content="Learn about ORIGGIN's mission to transform Africa's energy landscape through innovative technology and infrastructure"
        />
      </Head> */}

      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 -z-10 opacity-50">
          <svg
            width="344"
            height="439"
            viewBox="0 0 344 439"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-30.6234 96.1563C-8.91268 69.7377 29.2973 67.7353 60.527 53.8054C100.987 35.7583 136.69 -6.82805 180.071 2.17715C222.878 11.0632 239.954 62.4507 267.137 96.6943C295.095 131.915 333.922 161.529 341.719 205.815C349.778 251.59 332.642 298.186 309.732 338.622C287.108 378.553 256.621 418.114 213.13 432.771C171.487 446.805 126.289 430.095 85.2937 414.258C52.5836 401.622 28.5677 376.105 3.35637 351.731C-18.7187 330.39 -42.4335 309.902 -52.6122 280.935C-62.6695 252.313 -56.4364 221.893 -52.8518 191.77C-48.9052 158.606 -51.8271 121.958 -30.6234 96.1563Z"
              fill="url(#paint0_linear_4_736)"
              fillOpacity="0.5"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_736"
                x1="-6.991"
                y1="71.9664"
                x2="293.741"
                y2="370.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF61C8" stopOpacity="0.4" />
                <stop offset="1" stopColor="#FFBFC0" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute right-0 top-1/3 -z-10 opacity-50">
          <svg
            width="316"
            height="425"
            viewBox="0 0 316 425"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M170.353 59.2884C215.074 41.569 252.25 -7.28757 299.643 0.921607C344.062 8.61557 373.288 56.052 391.054 97.5171C408.093 137.289 401.63 182.184 395.666 225.044C390.299 263.615 378.099 300.122 358.203 333.589C338.491 366.746 316.963 402.71 281.313 417.391C246.457 431.745 208.044 410.996 170.353 410.946C132.726 410.896 90.8832 437.968 59.564 417.096C27.8184 395.939 32.2495 347.832 20.9467 311.375C12.0266 282.604 -0.595827 255.163 0.0218306 225.044C0.632163 195.283 8.51987 165.875 24.4461 140.735C40.0316 116.132 63.7513 98.5059 89.1714 84.3163C114.329 70.2731 143.57 69.9008 170.353 59.2884Z"
              fill="url(#paint0_linear_4_737)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_737"
                x1="201"
                y1="0"
                x2="201"
                y2="425"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D16DEF" stopOpacity="0.5" />
                <stop offset="1" stopColor="#F6E1FF" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* About Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold text-[#EF4472] mb-4">
                Who We Are
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Origgin Ltd is a Ghanaian energy technology company committed to
                designing and developing technologies for the manufacturing,
                distribution, sale, and consumption of electricity. Our mission
                is to address Africa's energy crisis and build a future where
                reliable and affordable electricity powers sustainable
                development across the continent.
              </p>
            </div>
            {/* Focus Areas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col items-center text-center border border-gray-100"
                >
                  <div className="p-5 bg-[#EF4472]/10 rounded-full mb-5">
                    {area.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    {area.title}
                  </h2>
                  <p className="text-gray-600">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-20 bg-gradient-to-r from-[#EF4472] to-[#D1365C] text-white">
          {/* Decorative waves */}
          <div className="absolute top-0 left-0 right-0 overflow-hidden opacity-10">
            <svg
              viewBox="0 0 1200 120"
              className="w-full h-20"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                fill="currentColor"
              />
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                fill="currentColor"
              />
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-xl max-w-3xl mx-auto font-medium opacity-90">
              To make electricity available and accessible to everyone in Africa
              through innovative technology solutions.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#EF4472] mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our team is composed of passionate and skilled professionals
                dedicated to transforming Africa's energy landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => {
                const person = team[0]; // Using first team member as template
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-5 border-4 border-[#EF4472]/20">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-medium text-xl text-gray-800 mb-1">
                      {person.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      {person.decription}
                    </p>
                    <div className="space-y-2 text-gray-600 text-sm w-full">
                      <div className="flex items-start justify-center gap-2">
                        <FaRegCheckCircle className="text-[#EF4472]" />
                        <span>{person.membersince}</span>
                      </div>
                      <div className="flex items-start justify-center gap-2">
                        <FaRegCheckCircle className="text-[#EF4472]" />
                        <span>{person.designition1}</span>
                      </div>
                      <div className="flex items-start justify-center gap-2">
                        <FaRegCheckCircle className="text-[#EF4472]" />
                        <span>{person.designation2}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
      </div>
    </>
  );
};

export default Company;
