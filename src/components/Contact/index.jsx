function Contact() {
  return (
    <div
      id="contact"
      className="h-screen gap-3 flex flex-col items-center justify-center text-center"
    >
      <h1 className="mb-6 text-5xl font-extrabold text-slate-900">About Us</h1>
      <div>
        <p className="mb-2">Alamat:</p>
        <div className="py-2 px-4 ring-1 ring-slate-300 bg-slate-100 shadow-sm rounded-xl">
          <b>Jalan Sekeloa No. 7, Bandung, Indonesia</b>
        </div>
      </div>
      <di>
        <p className="mb-2">Telepon:</p>{" "}
        <div className="py-2 px-4 ring-1 ring-slate-300 bg-slate-100 shadow-sm rounded-xl">
          <b>+62 812 3480 9260</b>
        </div>
      </di>
      <di>
        <p className="mb-2">Email:</p>{" "}
        <div className="py-2 px-4 ring-1 ring-slate-300 bg-slate-100 shadow-sm rounded-xl">
          <b>info@bantuin.me</b>
        </div>
      </di>
      <di>
        <p className="mb-2">Situs web:</p>
        <div className="py-2 px-4 ring-1 ring-slate-300 bg-slate-100 shadow-sm rounded-xl">
          <b>www.bantuin.me</b>{" "}
        </div>
      </di>
    </div>
  );
}

export default Contact;
