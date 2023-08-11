/* eslint-disable react/prop-types */
function Services({ content, children, title }) {
  return (
    <div
      className={`flex gap-12 ${
        content === "right" ? "flex-row-reverse" : "flex-row"
      } `}
    >
      <div className="w-96 h-96 rounded-xl bg-slate-200"></div>
      <div>
        <h1 className="py-4 bg-gradient-to-r from-slate-300 to-white text-transparent bg-clip-text text-4xl mb-6 font-bold">
          {title}
        </h1>
        <p className="text-slate-200 font-light tracking-wide text-lg">
          {children}
        </p>
      </div>
    </div>
  );
}

export default Services;
