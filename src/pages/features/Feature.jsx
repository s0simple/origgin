import Cards from "./Cards";
import { PiMicrophoneLight } from "react-icons/pi";
// import Head from "next/head";

const Feature = () => {
  return (
    <>
      {/* <Head>
        <title>ORIGGIN Features - Seamless Electricity Solutions</title>
        <meta
          name="description"
          content="Discover ORIGGIN's powerful features for easy electricity prepaid purchases with just your voice"
        />
      </Head> */}

      <div className=" relative z-10">
        {/* Hero Section with Phone Mockup */}
        <section className="">
          <div className="flex justify-center animate-float">
            <img
              src="/assets/phonemockup.png"
              className="w-full max-w-xs md:max-w-lg lg:max-w-xl drop-shadow-2xl"
              alt="ORIGGIN app interface showing voice command features"
              loading="lazy"
            />
          </div>
        </section>

        {/* Tagline Section */}
        <section className="my-12 md:my-0 mb-20">
          <div className="flex flex-col items-center text-center px-4">
            <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wider  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Origgin
            </h1>
            <h2 className="text-xl md:text-xl font-semibold text-gray-800 ">
              Gives You Seamless
            </h2>
            <div className="space-y-1">
              <p className="text-xl md:text-xl font-semibold text-gray-800 ">
                Features To Solve Your
              </p>
              <div className="flex justify-center items-center gap-3">
                <p className="text-xl md:text-xl font-bold text-blue-600 ">
                  Problem Easily
                </p>
                <PiMicrophoneLight
                  className="text-blue-500 text-3xl animate-pulse"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="py-16 mt-20 relative md:py-24 mb-50 bg-[#161C2DCC] text-white"
          aria-labelledby="features-heading"
        >
          {/* Gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2
                id="features-heading"
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Features
              </h2>
              <p className="text-base md:text-lg opacity-90 leading-relaxed">
                We provide the simplest way to buy electricity prepaid from ECG
                with just a few taps or voice commands on your smartphone.
              </p>
            </div>

            {/* Cards component with added animation */}
            <div className="relative">
              {/* <div className="absolute -inset-4 bg-blue-500 rounded-xl blur-lg opacity-10"></div> */}
              <Cards />
            </div>

            {/* CTA Section */}
            {/* <div className="mt-16 text-center">
              <h3 className="text-xl md:text-2xl font-semibold mb-6">
                Ready to experience seamless electricity payments?
              </h3>
              <button
                className="bg-gradient-to-r from-blue-600 to-purple-600 bg-[#161C2DCC] text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                aria-label="Download ORIGGIN now"
              >
                Download Now
              </button>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Feature;
