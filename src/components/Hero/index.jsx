function Hero() {
  return (
    <div
      id="hero"
      className="relative sm:py-12 sm:px-24 p-8 min-h-screen flex justify-center items-center"
    >
      <div className="absolute top-[20%] right-[10%] blur-2xl opacity-20">
        <img src="/icon/blob.svg" width={500} height={500} alt="" />
      </div>
      <div className="z-10">
        <p className="mb-3 text-slate-800 font-semibold">
          Bantuin Tech Solutions
        </p>
        <h1 className="sm:text-5xl text-4xl font-black text-slate-900 drop-shadow-sm">
          Solusi kreatif dan inovatif untuk memenuhi kebutuhan digital
          perusahaan Anda.
        </h1>
        <a href="#price">
          <button className="mt-12 py-4 px-8 bg-gradient-to-br from-slate-900 to-slate-900/80 text-lg text-white font-bold rounded-xl hover:scale-105 focus:outline-none transition-all duration-300 ease-in-out">
            Mulai Sekarang
          </button>
        </a>
      </div>
    </div>
  );
}

export default Hero;
