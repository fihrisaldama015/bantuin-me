/* eslint-disable react/prop-types */

function NavbarLink({ children, url }) {
  return (
    <div className="text-slate-950 py-1 relative">
      <a
        href={url}
        className="before:transition-all before:duration-300 before:ease-in-out before:h-[2px] before:bottom-0 before:absolute before:bg-slate-700 before:w-0 before:hover:w-[100%] before:content-['']"
      >
        {children}
      </a>
    </div>
  );
}

export default NavbarLink;
