import "./HiwCards.css";
import { FiBook, FiCode, FiDatabase, FiLayers, FiServer } from "react-icons/fi";
// import { appstore } from "";

const HiwCArds = () => {
  const cards = [
    {
      id: 1,
      icon: <FiBook size={24} />,
      title: "Download the Origgin App",
      description:
        "Available on Android, iOS and Huawei, the Origgin app is your gateway to easy electricity purchase. Sign up, link your prepaid meter, and get started in minutes.",
    },
    {
      id: 2,
      icon: <FiCode size={24} />,
      title: "Voice Activation",
      description:
        "Once your account is set up, activate Sona, our voice assistant feature to manage your electricity by simply speaking commands. Recharging has never been easier!",
    },
    {
      id: 3,
      icon: <FiDatabase size={24} />,
      title: "Stay Powered Up",
      description:
        "Whether you're at home or on the go, Origgin ensures you're always in control of your electricity consumption. Recharge instantly, monitor usage, and avoid sudden power outages with our smart alerts.",
    },
  ];
  return (
    <>
      <div className="  hiwcards-container text-xs text-center ">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="flex flex-col items-center mt-20"
            //   className={`card ${index % 2 === 0 ? "green-card" : "blue-card"}`}
          >
            <div
              className={` p-4  ${index % 2 === 0 ? "blue-card" : "red-card"}`}
            >
              {card.icon}
            </div>
            <h1 className=" text-xs">{card.title}</h1>
            <p className="">{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HiwCArds;
