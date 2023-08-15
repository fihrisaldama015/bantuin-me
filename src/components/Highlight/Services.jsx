/* eslint-disable react/prop-types */
function Services({ content, children, title, img }) {
  return (
    <div
      className={`flex py-28 gap-20 flex-col items-center ${
        content === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
      } `}
    >
      <div className="md:w-[700px] w-full rounded-xl ring-1 ring-white/50 bg-slate-600 flex items-center">
        <img src={img} alt="" className="object-cover rounded-xl" />
      </div>
      <div className={`${content === "left" ? "text-right" : "text-left"}`}>
        <h1 className="py-4 bg-gradient-to-tr from-white/60 to-white drop-shadow-xl text-transparent bg-clip-text text-4xl mb-6 font-bold">
          {title}
        </h1>
        <p className="text-slate-100 font-light tracking-wide text-md">
          {children}
        </p>
      </div>
    </div>
  );
}

export default Services;
