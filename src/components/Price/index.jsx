function CheckBox() {
  return (
    <img
      src="/icon/check.png"
      width={16}
      height={16}
      className="object-contain"
      alt="check"
    />
  );
}

function Price() {
  return (
    <div
      id="price"
      className="md:px-24 px-12 min-h-screen flex flex-col justify-center items-center"
    >
      <h3 className="mb-3 text-xl font-normal text-slate-700">
        Our Price List
      </h3>
      <h1 className="mb-16 text-4xl text-center font-extrabold text-slate-900">
        Bagaimana Kami Bantuin Project Anda?
      </h1>
      <div className="flex lg:flex-row flex-col justify-center md:gap-6 gap-12">
        <div className="p-8 hover:scale-105 hover:shadow-lg hover:-translate-y-2 transition-all ease-in-out duration-500 ring-1 shadow-sm ring-slate-200 rounded-xl flex flex-col items-center">
          <p className="text-center font-semibold text-xl">Intermediate</p>
          <p className="mb-6 text-center text-sm">Website Dinamis</p>
          <span className="mb-3 flex items-center gap-2">
            <h1 className="text-sm line-through font-light text-slate-800">
              Rp3.499.000
            </h1>
            <button
              className="py-1 px-2 text-xs bg-blue-100 rounded-full text-blue-600 font-semibold"
              disabled
            >
              DISKON 15%
            </button>
          </span>
          <span className="mb-6 flex items-end">
            Rp<h1 className="text-4xl font-bold text-slate-800">2.999.000</h1>
          </span>
          <p className="mb-6 text-blue-500 font-semibold">+ Gratis Revisi</p>
          <a href="https://wa.me/6281234809260/?text=Saya+tertarik+untuk+paket+Intermediate+(Website+Dinamis)+dengan+harga+Rp2.999.000">
            <button className="px-4 py-2 rounded-md bg-blue-500 hover:scale-95 transition-all ease-in-out duration-300 ring-1 ring-blue-50 font-bold text-white">
              Mulai Sekarang
            </button>
          </a>
          <div className="my-6 h-[1px] w-full bg-slate-300"></div>

          <ul className="[&>li]:flex [&>li]:items-baseline [&>li]:gap-3 flex flex-col gap-3">
            <li>
              <CheckBox />
              <b> Semua fitur dari Paket Basic.</b>
            </li>
            <li>
              <CheckBox />
              Desain yang lebih premium dengan aset yang lebih kaya.
            </li>
            <li>
              <CheckBox />
              Manajemen konten melalui sistem (CMS)
            </li>
            <li>
              <CheckBox />
              Integrasi galeri gambar untuk menampilkan portofolio atau galeri
              foto.
            </li>
            <li>
              <CheckBox />
              Formulir kontak dengan validasi data dan pemberitahuan email.
            </li>
            <li>
              <CheckBox />
              Integrasi dengan media sosial yang lebih kuat.
            </li>
          </ul>
        </div>
        <div className="p-8 hover:scale-105 hover:shadow-lg hover:-translate-y-2 transition-all ease-in-out duration-500 ring-1 shadow-sm ring-slate-200 rounded-xl flex flex-col items-center relative">
          <div className="absolute -top-6 bg-red-500 py-2 font-semibold px-4 text-sm text-white rounded-full">
            Produk Terlaris
          </div>
          <p className="text-center font-semibold text-xl">Basic</p>
          <p className="mb-6 text-center text-sm">Website Statis</p>
          <span className="mb-3 flex items-center gap-2">
            <h1 className="text-sm line-through font-light text-slate-800">
              Rp2.199.000
            </h1>
            <button
              className="py-1 px-2 text-xs bg-red-100 rounded-full text-red-600 font-semibold"
              disabled
            >
              DISKON 32%
            </button>
          </span>
          <span className="mb-6 flex items-end">
            Rp<h1 className="text-4xl font-bold text-slate-800">1.499.000</h1>
          </span>
          <p className="mb-6 text-red-500 font-semibold">+ Gratis Revisi</p>
          <a href="https://wa.me/6281234809260/?text=Saya+tertarik+untuk+paket+terlaris+-+Basic+(Website+Statis)+dengan+harga+Rp1.499.000">
            <button className="px-8 py-4 rounded-md bg-red-500 hover:scale-95 transition-all ease-in-out duration-300 ring-1 ring-blue-50 font-bold text-white">
              Mulai Sekarang
            </button>
          </a>
          <div className="my-6 h-[1px] w-full bg-slate-300"></div>
          <ul className="[&>li]:flex [&>li]:items-baseline [&>li]:gap-3 flex flex-col gap-3">
            <li>
              <CheckBox />
              Desain sederhana dan responsif.
            </li>
            <li>
              <CheckBox />
              Hingga 5 halaman statis
            </li>
            <li>
              <CheckBox />
              Integrasi dengan media sosial.
            </li>
            <li>
              <CheckBox />
              Tautan navigasi yang mudah digunakan.
            </li>
            <li>
              <CheckBox />
              Formulir kontak sederhana untuk pengguna mengirim pesan.
            </li>
            <li>
              <CheckBox />
              Penyesuaian warna dan font dasar sesuai dengan kebutuhan merek
              Anda.
            </li>
          </ul>
        </div>

        <div className="p-8 hover:scale-105 hover:shadow-lg hover:-translate-y-2 transition-all ease-in-out duration-500 ring-1 shadow-sm ring-slate-200 rounded-xl flex flex-col items-center">
          <p className="text-center font-semibold text-xl">Advanced</p>
          <p className="mb-6 text-center text-sm">Website E-Commerce</p>
          <span className="mb-3 flex items-center gap-2">
            <h1 className="text-sm line-through font-light text-slate-800">
              Rp5.799.000
            </h1>
            <button
              className="py-1 px-2 text-xs bg-blue-100 rounded-full text-blue-600 font-semibold"
              disabled
            >
              DISKON 14%
            </button>
          </span>
          <span className="mb-6 flex items-end">
            Rp<h1 className="text-4xl font-bold text-slate-800">4.999.000</h1>
          </span>
          <p className="mb-6 text-blue-500 font-semibold">+ Gratis Revisi</p>
          <a href="https://wa.me/6281234809260/?text=Saya+tertarik+untuk+paket+Advanced+(Website+E-Commerce)+dengan+harga+Rp4.999.000">
            <button className="px-4 py-2 rounded-md bg-blue-500 hover:scale-95 transition-all ease-in-out duration-300 ring-1 ring-blue-50 font-bold text-white">
              Mulai Sekarang
            </button>
          </a>

          <div className="my-6 h-[1px] w-full bg-slate-300"></div>

          <ul className="[&>li]:flex [&>li]:items-baseline [&>li]:gap-3 flex flex-col gap-3">
            <li>
              <CheckBox />
              <b> Semua fitur dari Paket Intermediate.</b>
            </li>
            <li>
              <CheckBox />
              Sistem keranjang belanja untuk menambahkan produk ke dalamnya.
            </li>
            <li>
              <CheckBox />
              Integrasi pembayaran online yang aman.
            </li>
            <li>
              <CheckBox />
              Manajemen produk yang memungkinkan Anda untuk menambah, mengedit,
              dan menghapus produk.
            </li>
            <li>
              <CheckBox />
              Penyesuaian tampilan produk dengan deskripsi yang lengkap.
            </li>
            <li>
              <CheckBox />
              Integrasi sistem pengiriman atau pengiriman dengan informasi
              pelacakan.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Price;
