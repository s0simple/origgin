import { FiBook, FiCode, FiDatabase, FiLayers, FiServer } from "react-icons/fi";
import "./IconCards.css";

const Cards = () => {
  // Card data array
  const cards = [
    {
      id: 1,
      icon: <FiBook size={24} />,
      title: "Multiple Meter Management",
      description:
        "Easily manage multiple prepaid meters from a single account, whether for home, office, or other properties, with Origgin’s multi-meter functionality.",
    },
    {
      id: 2,
      icon: <FiCode size={24} />,
      title: "Voice-Activated Recharges by Sona",
      description:
        "Powered our in-built voice assistant Sona, users can recharge your prepaid electricity meter with ease by simply speaking to Origgin—no manual input required, and your meter is topped up instantly.",
    },
    {
      id: 3,
      icon: <FiDatabase size={24} />,
      title: "Loyalty Rewards on Top-Ups",
      description:
        "Earn points with every electricity recharge on Origgin, which can be redeemed for discounts and perks, adding extra value to your purchases.",
    },
    {
      id: 4,
      icon: <FiLayers size={24} />,
      title: "Scheduled Top-Ups",
      description:
        "Set a recurring date for recharging, complete with reminders to ensure uninterrupted power and prevent outages, with customizable scheduling options.",
    },
    {
      id: 5,
      icon: <FiServer size={24} />,
      title: "Budget-Friendly Purchases",
      description:
        "Plan your monthly electricity needs, set a budget, review rates, make necessary adjustments, purchase within your budget, and track usage for efficient spending.",
    },
    {
      id: 6,
      icon: <FiServer size={24} />,
      title: "Secure Transaction Options",
      description:
        "Origgin offers safe and fast payments through mobile money, credit, and debit cards, all protected with advanced encryption for worry-free transactions.",
    },
  ];

  return (
    <div className="cards-container text-xs text-center ">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="flex flex-col items-center mt-20"
          //   className={`card ${index % 2 === 0 ? "green-card" : "blue-card"}`}
        >
          <div
            className={`card-icon p-4  ${
              index % 2 === 0 ? "blue-card" : "red-card"
            }`}
          >
            {card.icon}
          </div>
          <h1 className="card-title text-xs">{card.title}</h1>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
