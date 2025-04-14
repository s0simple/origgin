import { FaRegCheckCircle } from "react-icons/fa";
import { BiServer, BiChip, BiBell, BiCreditCard, BiHome } from "react-icons/bi";
import {
  HiOutlineOfficeBuilding,
  HiOutlineLightningBolt,
} from "react-icons/hi";

const Company = () => {
  const focusAreas = [
    {
      icon: <BiChip className="text-[#EF4472] text-2xl" />,
      title: "Technology",
      description:
        "We create ground-breaking technologies for electricity distribution in Africa.",
    },
    {
      icon: <HiOutlineOfficeBuilding className="text-[#EF4472] text-2xl" />,
      title: "Infrastructure",
      description:
        "We build reliable systems to scale electricity accessibility.",
    },
    {
      icon: <HiOutlineLightningBolt className="text-[#EF4472] text-2xl" />,
      title: "Products",
      description:
        "We create high-quality products for seamless electricity usage.",
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
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 -z-10 opacity-40">
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

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl font-bold text-[#EF4472] mb-3">
              Who We Are
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Origgin Ltd is a Ghanaian energy technology company developing
              solutions for electricity distribution across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 py-12 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#EF4472]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  {area.icon}
                </div>
                <h2 className="text-lg font-semibold text-center mb-2">
                  {area.title}
                </h2>
                <p className="text-gray-600 text-sm text-center">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 my-20 bg-gradient-to-r from-[#EF4472] to-[#D1365C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            To make electricity available and accessible to everyone in Africa
            through innovative technology.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EF4472] mb-3">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Passionate professionals dedicated to transforming Africa's energy
              landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
    </div>
  );
};

export default Company;
