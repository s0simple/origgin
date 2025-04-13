import Cards from "./Cards";
const Feature = () => {
  return (
    <div className="mt-20">
      <section>
        <div className="flex justify-center">
          <img
            src="/src/assets/phonemockup.png"
            className="w-[60%]"
            alt="phone"
          />
        </div>
      </section>
      <section className="my-20">
        <div className="flex flex-col justify-end 0">
          <h1 className="uppercase inline-flex justify-center ">origgin</h1>
          <h2 className="inline-flex justify-center">gives you seamless</h2>
          <p className="inline-flex justify-center">features to solve your</p>
          <p className="text-red-500 inline-flex justify-center">
            problem easily
          </p>
        </div>
      </section>
      <section className="py-20 bg-[#161C2DCC] text-white mb-40">
        <div className="flex flex-col  gap-5 items-center mb-10">
          <h3 className="text-xl">Features</h3>
          <p className="text-xs">
            We provide the avenue and access for everyone who wants to buy
            electricity prepaid from ECG.
          </p>
        </div>
        <Cards />
      </section>
    </div>
  );
};

export default Feature;
