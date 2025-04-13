import Cards from "./Cards";
import { PiMicrophoneLight } from "react-icons/pi";

const Feature = () => {
  return (
    <>
      <div className="mt-20 relative z-10">
        {/* Hero Section with Phone Mockup */}

        <section className="py-10">
          <div className="flex justify-center animate-float">
            <img
              src="/public/assets/phonemockup.png"
              className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl"
              alt="Phone mockup displaying ORIGGIN app"
            />
          </div>
        </section>

        {/* Tagline Section */}
        <section className="my-16 md:my-24 ">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Origgin
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
              Gives You Seamless
            </h2>
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                Features To Solve Your
              </p>
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                Problem Easily
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 relative not-visited:lg:mb-50 md:py-24 bg-[#161C2DCC] text-white">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Features</h3>
              <p className="text-sm md:text-base opacity-80 leading-relaxed">
                We provide the avenue and access for everyone who wants to buy
                electricity prepaid from ECG with just a few taps on your
                smartphone.
              </p>
            </div>
            <Cards />
          </div>
        </section>
      </div>
    </>
  );
};

export default Feature;
