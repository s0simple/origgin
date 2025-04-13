import { FaRegCheckCircle } from "react-icons/fa";
import { BiServer } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { PiUserCheckBold } from "react-icons/pi";
const Company = () => {
  const card = [
    {
      icon: <BiServer className="text-[#EF4472] text-3xl" />,
      title: "Technology",
      Description:
        "We create ground-breaking technologies that enable the manufacturing, distribution, selling and consumption of electricity in Africa.",
    },
    {
      icon: <HiOutlineOfficeBuilding className="text-[#EF4472] text-3xl" />,
      title: "Infrastructure",
      Description:
        "We build reliable systems and structures that scale the availability and accessibility of electricity to everyone in Africa.",
    },
    {
      icon: <PiUserCheckBold className="text-[#EF4472] text-3xl" />,
      title: "Products",
      Description:
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
    <div className="relative">
      {/* Background Vectors */}

      {/* Who We Are Section */}
      <section className="mx-auto container max-w-6xl py-20 my-20">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-3xl">
              <span className="font-semibold text-2xl text-[#EF4472] mb-2 block">
                Who we are?
              </span>
              <p className="text-base text-gray-600 leading-relaxed">
                Origgin Ltd is a Ghanaian energy technology company committed to
                designing and developing technologies for the manufacturing,
                distribution, sale, and consumption of electricity. Our mission
                is to address Africa's energy crisis and build a future where
                reliable and affordable electricity powers sustainable
                development across the continent.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap -mx-4 mt-10">
          {card.map((carditem, id) => (
            <div key={id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="p-10 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="p-6 bg-[#EF4472]/10 rounded-full mb-6">
                  {carditem.icon}
                </div>
                <h4 className="font-semibold text-xl text-gray-800 mb-3">
                  {carditem.title}
                </h4>
                <p className="text-gray-500 flex-grow">
                  {carditem.Description}
                </p>
              </div>
            </div>
          ))}{" "}
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 bg-[#EF4472] text-white">
        <div className="absolute top-0 inset-0 opacity-10">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
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
        <div className="container mx-auto px-4 text-center">
          <span className="font-semibold text-2xl mb-2 block">Our Mission</span>
          <p className="text-lg max-w-2xl mx-auto">
            Our mission is to make electricity available and accessible to
            everyone in Africa.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <span className="font-semibold text-2xl text-[#EF4472] mb-2 block">
              Meet Our Team
            </span>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team is composed of passionate and skilled professionals
              dedicated to delivering on our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => {
              const person = team[0]; // Using first team member as template
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-all"
                >
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-[#EF4472]/20">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-xl text-gray-800 mb-1">
                    {person.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {person.decription}
                  </p>
                  <div className="space-y-2 text-gray-600 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <FaRegCheckCircle className="text-[#EF4472]" />
                      <span>{person.membersince}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <FaRegCheckCircle className="text-[#EF4472]" />
                      <span>{person.designition1}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
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
