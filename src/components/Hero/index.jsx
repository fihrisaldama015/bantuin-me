import BlobShape from "../../assets/blob.svg";
function Hero() {
  return (
    <div
      id="hero"
      className="relative sm:py-12 sm:px-24 p-8 min-h-screen flex justify-center items-center"
    >
      <div className="absolute top-[20%] right-[10%] blur-2xl opacity-20">
        <img src={BlobShape} width={500} height={500} alt="" />
      </div>
      <div className="z-10">
        <p className="mb-3 text-slate-800 font-semibold">
          Bantuin Web Solutions
        </p>
        <h1 className="sm:text-5xl text-3xl font-black text-slate-900 drop-shadow-sm">
          Solusi kreatif dan inovatif untuk memenuhi kebutuhan digital
          perusahaan Anda.
        </h1>
        <button className="mt-12 py-4 px-8 bg-gradient-to-br from-slate-900 to-slate-900/80 text-lg text-white font-bold rounded-xl hover:text-black hover:from-slate-400/70 hover:to-slate-400 focus:outline-none transition-all">
          Mulai Sekarang
        </button>
      </div>
    </div>
  );
}

export default Hero;
