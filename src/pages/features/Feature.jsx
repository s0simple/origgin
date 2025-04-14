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

      <div className="relative z-10">
        {/* Hero Section with Phone Mockup */}
        <section className="mt-5">
          <div className="flex justify-center animate-float">
            <img
              src="/assets/phonemockup.png"
              className="w-full max-w-[240px] md:max-w-[340px] lg:max-w-[400px] drop-shadow-xl"
              alt="ORIGGIN app interface showing voice command features"
              loading="lazy"
            />
          </div>
        </section>

        {/* Tagline Section */}
        <section className="my-6 md:my-4 mb-16">
          <div className="flex flex-col items-center text-center px-4">
            <h1 className="text-lg md:text-xl font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Origgin
            </h1>
            <h2 className="text-lg md:text-lg font-medium text-gray-800">
              Gives You Seamless
            </h2>
            <div className="space-y-1">
              <p className="text-lg md:text-lg font-medium text-gray-800">
                Features To Solve Your
              </p>
              <div className="flex justify-center items-center gap-2">
                <p className="text-lg md:text-lg font-bold text-blue-600">
                  Problem Easily
                </p>
                <PiMicrophoneLight
                  className="text-blue-500 text-2xl animate-pulse"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="py-12 mt-16 relative md:py-20 mb-40 bg-[#161C2DCC] text-white"
          aria-labelledby="features-heading"
        >
          {/* Gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
              <h2
                id="features-heading"
                className="text-2xl md:text-3xl font-bold mb-3"
              >
                Features
              </h2>
              <p className="text-sm md:text-base opacity-90 leading-relaxed">
                We provide the simplest way to buy electricity prepaid from ECG
                with just a few taps or voice commands on your smartphone.
              </p>
            </div>

            {/* Cards component with added animation */}
            <div className="relative">
              <Cards />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Feature;
