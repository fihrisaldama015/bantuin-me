/* eslint-disable react/prop-types */
function Services({ content, children, title, img }) {
  return (
    <div
      className={`flex gap-12 flex-col ${
        content === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
      } `}
    >
      <div className="rounded-xl bg-slate-200 flex items-center">
        <img src={img} alt="" className="object-cover rounded-xl" />
      </div>
      <div>
        <h1 className="py-4 bg-gradient-to-r from-slate-200 to-white text-transparent bg-clip-text text-4xl mb-6 font-bold">
          {title}
        </h1>
        <p className="text-slate-100 font-light tracking-wide text-lg">
          {children}
        </p>
      </div>
    </div>
  );
}

export default Services;
