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
      image: "/src/assets/avater1.png",
      name: "Kane Mani, CEO & CTO",
      decription:
        "Leading the vision and direction of Dodo Technologies with a focus on innovation and impact.",
      membersince: "Co-founded Origgin in 2010",
      designition1: 'Patron of A "Day In Tech"',
      designation2: "Co-founder & CEO at Gudu Studios",
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
                  Who we are?
                </span>
                <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                ></h2>
                <p class="text-sm text-gray-500">
                  Origgin Ltd is a Ghanaian energy technology company committed
                  to designing and developing technologies for the
                  manufacturing, distribution, sale, and consumption of
                  electricity. Our mission is to address Africa’s energy crisis
                  and build a future where reliable and affordable electricity
                  powers sustainable development across the continent.
                </p>
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

      <section>
        <div class="flex flex-wrap -mx-4 bg-[#EF4472] ">
          <div class="w-full px-4 py-30  ">
            <div class="text-center flex flex-col items-center mx-auto   max-w-full  text-amber-50">
              <span class="font-semibold text-2xl text-primary mb-2 block">
                Our Mission
              </span>
              <h2
                class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              ></h2>
              <p class="text-sm ">
                Our mission is to make electricity available and accessible to
                everyone in Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="flex flex-wrap -mx-20  ">
          <div class="w-full px-4 py-30  ">
            <div class="text-center flex flex-col items-center mx-auto   max-w-full ">
              <span class="font-semibold text-2xl text-primary mb-2 block">
                Meet Our Team
              </span>
              <h2
                class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              ></h2>
              <p class="text-sm ">
                Our mission is to make electricity available and accessible to
                everyone in Africa.
              </p>
            </div>
            <div>
              <div className="cards">
                {/* {team.map((person, index) => (
                    <div key={index}>
                      <div>
                        <div className="card_img">
                          <img src={person.image} alt="" />
                        </div>
                        <h2 className="card_title">{person.title}</h2>
                        <p className="decription">{person.decription}</p>
                        <div className="membersince flex">
                          <div className="icon"></div>
                          <p>{person.membersince}</p>
                        </div>
                        <div className="designition1 flex">
                          <div className="icon"></div>
                          <p>{person.designition1}</p>
                        </div>
                        <div className="designition2 flex">
                          <div className="icon"></div>
                          <p>{person.designation2}</p>
                        </div>
                      </div>
                    </div>
                  )
                )} */}
              </div>
              <div className="grid gap-15 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-15 justify-items-center container mx-auto my-40 max-w-6xl ">
                {Array.from({ length: 6 }).map((_, index) => {
                  const person = team[0];
                  return (
                    <div key={index} className="flex flex-col text-center ">
                      <div className="card_img pb-5 w-full">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full"
                        />
                      </div>
                      <h2 className="card_title font-medium text-2xl text-primary mb-2 block">
                        {person.name}
                      </h2>
                      <p className="description text-gray-500 text-sm">
                        {person.decription}
                      </p>
                      <div className="py-4 text-sm text-gray-500">
                        {" "}
                        <div className="membersince flex gap-2 items-center">
                          <div className="icon">
                            <FaRegCheckCircle
                              style={{
                                fontWeight: "bold",
                                color: "#EF4472",
                                fontSize: "16px",
                              }}
                            />
                          </div>
                          <p>{person.membersince}</p>
                        </div>
                        <div className="designation1 flex gap-2 items-center">
                          <div className="icon font-bold ">
                            <FaRegCheckCircle
                              style={{
                                fontWeight: "bold",
                                color: "#EF4472",
                                fontSize: "16px",
                              }}
                            />
                          </div>
                          <p>{person.designition1}</p>
                        </div>
                        <div className="designation2 flex gap-2 items-center">
                          <div className="icon">
                            <FaRegCheckCircle
                              style={{
                                fontWeight: "bold",
                                color: "#EF4472",
                                fontSize: "16px",
                              }}
                            />
                          </div>
                          <p>{person.designation2}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
