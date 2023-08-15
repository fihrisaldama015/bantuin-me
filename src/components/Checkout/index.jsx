import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Checkout() {
  const [searchParams] = useSearchParams();
  const productId = Number(searchParams.get("id"));
  const productName = ["Basic", "Intermediate", "Advanced"];
  const productPrice = ["Rp1.499.000", "Rp2.999.000", "Rp4.999.000"];
  const productDescription = ["Web Statis", "Web Dinamis", "Web E-Commerce"];

  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [email, setEmail] = useState("");
  const [noHP, setNoHP] = useState("");
  const [alamat, setAlamat] = useState("");
  const [metode, setMetode] = useState("");

  const checkoutProduct = () => {
    const text = `Hi,%20Saya%20tertarik%20untuk%20membeli%0D%0DPaket%20:%20%0D${
      productName[productId - 1]
    }%20${
      productDescription[productId - 1]
    }%0D%0DProfil%0DNama%20:%20${namaDepan}%20${namaBelakang}%0DEmail%20:%20${email}%0DNo.%20HP%20:%20${noHP}%0DAlamat%20Billing%20:%20${alamat}%0D%0DMetode%20Pembayaran%20:%20${metode}%0D%0DTotal%20:%20${
      productPrice[productId - 1]
    }`;
    window.location.href = `https://wa.me/6281234809260/?text=${text}`;
  };
  return (
    <>
      <div className="py-12 px-24 bg-slate-900 flex gap-2">
        <Link
          to="/"
          className="bg-slate-300 hover:bg-slate-200 transition-all ease-in-out cursor-pointer font-black rounded-full h-10 w-10 flex items-center justify-center"
        >
          {"<"}
        </Link>
        <h1 className="text-4xl font-semibold bg-gradient-to-tr from-white/75 to-white drop-shadow-xl text-transparent bg-clip-text">
          Review & Checkout
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col gap-12">
        <div className="py-12 px-24 flex flex-col gap-12">
          <div className="[&>h1]:text-slate-800">
            <h1>Pilihan Paket:</h1>
            <p className="mb-3 font-bold text-md">
              {productName[productId - 1]}
            </p>
            <h1>Harga:</h1>
            <p className="mb-3 font-bold text-md">
              {productPrice[productId - 1]}
            </p>
            <h1>Detail Pemesanan:</h1>
            <p className="font-bold text-md">
              {productDescription[productId - 1]}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-xl font-semibold">Pilih Mata Uang</h1>
            <div className="p-3 ring-1 rounded-md ring-slate-300 bg-slate-100">
              <select
                name="currency"
                id="currency"
                className="px-2 py-1 ring-1 ring-slate-300 focus:outline-none"
              >
                <option value="IDR">IDR</option>
                <option value="USD">USD</option>
              </select>
            </div>
            <h1 className="text-xl font-semibold">Detail Billing</h1>
            <div className="p-6 flex flex-col rounded-md bg-slate-100 ring-1 ring-slate-300">
              <form
                action=""
                className="flex flex-col [&>label]:text-slate-700"
              >
                <p className="mb-6 font-semibold">Informasi Pemesan</p>
                <div className="flex lg:flex-row flex-col justify-between gap-6 [&>div]:flex [&>div]:flex-col [&>div]:gap-2 [&>div]:flex-1">
                  <div>
                    <label htmlFor="firstName" className="">
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      onChange={(e) => setNamaDepan(e.target.value)}
                      className="py-2 px-4 focus:outline-none ring-1 ring-slate-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName">Nama Belakang</label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      onChange={(e) => setNamaBelakang(e.target.value)}
                      className="py-2 px-4 focus:outline-none ring-1 ring-slate-300"
                    />
                  </div>
                </div>
                <div className="mt-3 flex lg:flex-row flex-col justify-between gap-6 [&>div]:flex [&>div]:flex-col [&>div]:flex-1 [&>div]:gap-2">
                  <div>
                    <label htmlFor="email">Alamat Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-2 px-4 focus:outline-none ring-1 ring-slate-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Nomor HP</label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      onChange={(e) => setNoHP(e.target.value)}
                      className="py-2 px-4 focus:outline-none ring-1 ring-slate-300"
                    />
                  </div>
                </div>
                <p className="my-6 font-semibold">Alamat Billing</p>
                <label htmlFor="address" className="mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  onChange={(e) => setAlamat(e.target.value)}
                  className="p-3 ring-1 focus:outline-none ring-slate-300"
                  cols="2"
                  rows="2"
                ></textarea>
              </form>
            </div>
            <h1 className="text-xl font-semibold">Metode Pembayaran</h1>
            <form action="" className="text-slate-800 font-semibold">
              <div className="mb-6 collapse rounded-md collapse-arrow bg-slate-100">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md font-semibold">
                  Transfer (ATM / Internet Banking / Mobile Banking)
                </div>
                <div className="collapse-content">
                  <div className="bg-white rounded-md">
                    <div className="p-3 flex gap-3 border-b-2">
                      <input
                        type="radio"
                        name="metode"
                        id="BNI"
                        value="BNI"
                        onChange={(e) => setMetode(e.target.value)}
                      />
                      <label htmlFor="BNI">Bank BNI</label>
                    </div>
                    <div className="p-3 flex gap-3 border-b-2">
                      <input
                        type="radio"
                        name="metode"
                        id="MANDIRI"
                        onChange={(e) => setMetode(e.target.value)}
                        value="MANDIRI"
                      />
                      <label htmlFor="MANDIRI">Bank Mandiri</label>
                    </div>
                    <div className="p-3 flex gap-3 border-b-2">
                      <input
                        type="radio"
                        name="metode"
                        id="BRI"
                        value="BRI"
                        onChange={(e) => setMetode(e.target.value)}
                      />
                      <label htmlFor="BRI">Bank BRI</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6 collapse collapse-arrow bg-slate-100">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md font-semibold">
                  Virtual Account
                </div>
                <div className="collapse-content">
                  <div className="bg-white rounded-md">
                    <form action="" className="text-slate-800 font-semibold">
                      <div className="p-3 flex gap-3 border-b-2">
                        <input
                          type="radio"
                          name="metode"
                          id="VA_PERMATA"
                          value="VA_PERMATA"
                          onChange={(e) => setMetode(e.target.value)}
                        />
                        <label htmlFor="VA_PERMATA">Permata (VA)</label>
                      </div>
                      <div className="p-3 flex gap-3 border-b-2">
                        <input
                          type="radio"
                          name="metode"
                          id="VA_CIMB"
                          value="VA_CIMB"
                          onChange={(e) => setMetode(e.target.value)}
                        />
                        <label htmlFor="VA_CIMB">CIMB (VA)</label>
                      </div>
                      <div className="p-3 flex gap-3 border-b-2">
                        <input
                          type="radio"
                          name="metode"
                          id="VA_BNI"
                          value="VA_BNI"
                          onChange={(e) => setMetode(e.target.value)}
                        />
                        <label htmlFor="VA_BNI">BNI (VA)</label>
                      </div>
                      <div className="p-3 flex gap-3 border-b-2">
                        <input
                          type="radio"
                          name="metode"
                          id="VA_BRI"
                          value="VA_BRI"
                          onChange={(e) => setMetode(e.target.value)}
                        />
                        <label htmlFor="VA_BRI">BRI (VA)</label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-slate-100">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-md font-semibold">
                  Dompet Digital
                </div>
                <div className="collapse-content">
                  <div className="bg-white rounded-md">
                    <form action="" className="text-slate-800 font-semibold">
                      <div className="p-3 flex gap-3 border-b-2">
                        <input
                          type="radio"
                          name="metode"
                          id="DANA"
                          value="DANA"
                          onChange={(e) => setMetode(e.target.value)}
                        />
                        <label htmlFor="DANA">DANA</label>
                      </div>
                      <div className="p-3 flex gap-3 border-b-2">
                        <input
                          type="radio"
                          name="metode"
                          id="OVO"
                          value="OVO"
                          onChange={(e) => setMetode(e.target.value)}
                        />
                        <label htmlFor="OVO">OVO</label>
                      </div>
                      <div className="p-3 flex gap-3 border-b-2">
                        <input
                          type="radio"
                          name="metode"
                          id="GOPAY"
                          value="GOPAY"
                          onChange={(e) => setMetode(e.target.value)}
                        />
                        <label htmlFor="GOPAY">GO-PAY</label>
                      </div>
                      <div className="p-3 flex gap-3 border-b-2">
                        <input
                          type="radio"
                          name="metode"
                          id="SHOPEEPAY"
                          value="SHOPEEPAY"
                          onChange={(e) => setMetode(e.target.value)}
                        />
                        <label htmlFor="SHOPEEPAY">SHOPEEPAY</label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="py-12 px-24 flex flex-1 text-white">
          <div className="mt-6 p-6 w-full h-fit max-w-[400px] rounded-md bg-slate-800">
            <h1 className="mb-3 text-md font-semibold">Order Summary</h1>
            <div className="flex justify-between text-sm">
              <h2>Subtotal</h2>
              <p>{productPrice[productId - 1]},-</p>
            </div>
            <div className="my-6 h-[1px] bg-slate-600"></div>
            <div className="flex justify-between text-sm">
              <h2 className="text-slate-400">Totals</h2>
            </div>
            <div className="mt-3 flex justify-between text-sm">
              <h2 className="text-slate-400">Jasa Website</h2>
              <p className="text-slate-400">{productPrice[productId - 1]},-</p>
            </div>
            <div className="mt-3 flex justify-between text-sm">
              <h2>Totals</h2>
              <p>{productPrice[productId - 1]},-</p>
            </div>
            <div className="mt-3 flex justify-between text-sm">
              <h2>Tax</h2>
              <p>Rp.0,-</p>
            </div>
            <div className="my-6 h-[1px] bg-slate-600"></div>
            <h2 className="mb-3 text-slate-400 text-sm">Total Due Today</h2>
            <h1 className="mb-6 text-3xl font-semibold">
              {productPrice[productId - 1]},-
            </h1>
            <button
              type="button"
              onClick={checkoutProduct}
              className="py-2 px-4 rounded-sm w-full bg-slate-300 text-slate-900 font-bold text-sm"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
