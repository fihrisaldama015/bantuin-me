function Navbar() {
  return (
    <div className="px-24 bg-slate-50 relative">
      <div className="fixed top-6 p-6 z-20 w-[calc(100%-11rem)] bg-gradient-to-t from-white/70 to-slate-100/50 ring-1 ring-slate-300 rounded-xl backdrop-blur-md shadow-sm shadow-slate-100 flex justify-between">
        <div className="font-bold">Bantuin</div>
        <div className="flex gap-6 font-semibold">
          <div>Service</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
