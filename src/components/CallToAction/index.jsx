import CallToActionSVG from "../../assets/callToAction.svg";

function CallToAction() {
  return (
    <div className="p-24 h-screen flex flex-col justify-center items-center">
      <img src={CallToActionSVG} width={128} height={128} alt="" />
      <h1 className="mb-6 text-5xl font-extrabold text-slate-900">
        Let{"'"}s Begin
      </h1>
      <p className="max-w-md text-center font-normal text-slate-700">
        Ready to transform your project dreams into reality? Don’t wait. Take
        your software and digital creation to the next level with Bantuin.
      </p>
      <button className="my-6 py-2 px-4 bg-slate-300 text-sm text-slate-900 font-bold rounded-lg hover:text-black hover:bg-slate-400/70 focus:outline-none transition-all">
        Get Started
      </button>
    </div>
  );
}

export default CallToAction;
