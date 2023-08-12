function Navbar() {
  return (
    <div className="sm:px-24 px-8 bg-slate-50 relative">
      <div className="fixed top-6 py-3 px-6 z-20 sm:w-[calc(100%-11rem)] w-[calc(100%-3rem)] bg-gradient-to-t from-white/70 to-slate-100/50 ring-1 ring-slate-300 rounded-xl backdrop-blur-md shadow-sm shadow-slate-100 flex sm:flex-row flex-col items-center justify-between">
        <a href="#hero" className="flex gap-2 items-center font-bold">
          <img src="/logo.png" alt="logo" width={48} height={48} />
          {/* <h1>Bantuin</h1> */}
        </a>
        <div className="flex gap-6 items-center font-semibold">
          <div className="text-slate-950 py-1 transition-all ease-in border-b-2 border-transparent hover:border-slate-700">
            <a href="#service">Service</a>
          </div>
          <div className="text-slate-950 py-1 transition-all ease-in border-b-2 border-transparent hover:border-slate-700/90">
            <a href="#projects">Projects</a>
          </div>
          <div className="text-slate-950 py-1 transition-all ease-in border-b-2 border-transparent hover:border-slate-700">
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
