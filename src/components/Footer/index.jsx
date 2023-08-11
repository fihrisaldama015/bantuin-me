function Footer() {
  return (
    <div className="pt-12 px-24 flex flex-col justify-center items-center">
      <div className="flex">
        <div>
          <svg height="40" width="40">
            <circle cx="20" cy="20" r="20" fill="#49535A" />
          </svg>
          <svg height="40" width="40">
            <circle cx="20" cy="20" r="20" fill="#49535A" />
          </svg>
        </div>
        <div>
          <svg height="40" width="40">
            <circle cx="20" cy="20" r="20" fill="#49535A" />
          </svg>
          <svg height="40" width="40">
            <circle cx="20" cy="20" r="20" fill="#49535A" />
          </svg>
        </div>
      </div>
      <p className="my-6 text-md tracking-tight text-slate-700">
        &copy;{new Date().getFullYear()} Bantuin Web Solutions. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
