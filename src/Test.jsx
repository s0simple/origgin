<>
  <div className="relative z-10 overflow-hidden">
    {/* Background elements */}
    <div className="absolute top-0 left-0 -z-10 opacity-70">
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

    <div className="absolute right-0 top-1/3 -z-10 opacity-70">
      <svg
        width="316"
        height="425"
        viewBox="0 0 316 425"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M170.353 59.2884C215.074 41.569 252.25 -7.28757 299.643 0.921607C344.062 8.61557 373.288 56.052 391.054 97.5171C408.093 137.289 401.63 182.184 395.666 225.044C390.299 263.615 378.099 300.122 358.203 333.589C338.491 366.746 316.963 402.71 281.313 417.391C246.457 431.745 208.044 410.996 170.353 410.946C132.726 410.896 90.8832 437.968 59.564 417.096C27.8184 395.939 32.2495 347.832 20.9467 311.375C12.0266 282.604 -0.595827 255.163 0.0218306 225.044C0.632163 195.283 8.51987 165.875 24.4461 140.735C40.0316 116.132 63.7513 98.5059 89.1714 84.3163C114.329 70.2731 143.57 69.9008 170.353 59.2884Z"
          fill="url(#paint0_linear_4_737)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_4_737"
            x1="201"
            y1="0"
            x2="201"
            y2="425"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D16DEF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#F6E1FF" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    {/* Hero Section */}
    <section className="my-20">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-12 lg:mb-20 max-w-3xl">
          <div className="font-semibold text-primary space-y-3">
            <h1 className="text-3xl md:text-4xl mr-7 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              ORIGGIN
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-800">
              Electricity Made Simple,
            </h2>
            <div className="text-2xl md:text-3xl flex justify-center items-center gap-3">
              <p className="text-[#EF4444] font-semibold">Just Speak.</p>
              <span className="inline-block transform rotate-[20deg] hover:rotate-[30deg] transition-transform duration-300">
                <PiMicrophoneLight
                  className="text-gray-600 text-[44px] animate-pulse"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Phone Mockup */}
    <section className="py-10">
      <div className="flex justify-center animate-float">
        <img
          src="/assets/phonemockup.png"
          className="w-full max-w-xs md:max-w-lg lg:max-w-xl drop-shadow-2xl"
          alt="ORIGGIN app interface showing voice command functionality"
          loading="lazy"
        />
      </div>
    </section>

    <section className="py-10">
      <div className="container mx-auto px-4">
        <p className="mx-auto text-base md:text-lg text-center max-w-2xl text-gray-600 leading-relaxed mb-8">
          Origgin is a voice-enabled electricity prepaid app that makes buying
          electricity prepaid credit quick, simple and convenient. With Origgin
          you can top up your prepaid meter instantly — all by using your voice.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-8">
          <a
            href="https://play.google.com/store/apps/details?id=com.origgin.app"
            className="hover:opacity-90 transition-opacity hover:scale-105 duration-200"
            aria-label="Download ORIGGIN on Google Play"
          >
            <img
              className="h-32"
              src="/assets/googleplay.svg"
              alt="Get on Google Play"
            />
          </a>
          <a
            href="https://apps.apple.com/app/origgin/id123456789"
            className="hover:opacity-90 transition-opacity hover:scale-105 duration-200"
            aria-label="Download ORIGGIN on the App Store"
          >
            <img
              className="h-32"
              src="/assets/appstore.svg"
              alt="Download on the App Store"
            />
          </a>
        </div>
      </div>
    </section>
  </div>
  {/* // features */}
  <div className="mt-20 relative z-10">
    {/* Hero Section with Phone Mockup */}
    <section className="py-10">
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
    <section className="my-16 md:my-24">
      <div className="flex flex-col items-center text-center px-4">
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
          <div className="flex justify-center items-center gap-3">
            <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
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
      className="py-16 relative md:py-24 mb-50 bg-[#161C2DCC] text-white"
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
            We provide the simplest way to buy electricity prepaid from ECG with
            just a few taps or voice commands on your smartphone.
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
</>;
