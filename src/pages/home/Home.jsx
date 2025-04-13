const Home = () => {
  const url = "/";
  return (
    <div>
      <section className="my-20">
        <div className="flex flex-col justify-end 0">
          <h1 className="uppercase inline-flex justify-center ">origgin</h1>
          <h2 className="inline-flex justify-center">
            Electricity made simply
          </h2>
          <p className="text-red-500 inline-flex justify-center">Just Speak </p>
        </div>
      </section>
      <section>
        <div className="flex justify-center">
          <img
            src="/src/assets/phonemockup.png"
            className="w-[60%]"
            alt="phone"
          />
        </div>
      </section>
      <section>
        <div className=" ">
          <p className="  mx-auto text-sm text-center w-[50%] mt-20 text-gray-500">
            Origgin is a voice-enabled electricity prepaid app that makes buying
            electricity prepaid credit, quick, simple and convinient. with
            origgin you can top up your prepaid meter instantly --all by using
            your voice
          </p>

          <div className="Appstore flex justify-center gap-x-5">
            <img className="w-50" src="/src/assets/googleplay.svg" alt="" />
            <img className="w-50" src="/src/assets/appstore.svg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
