function CallToAction() {
  return (
    <div className="p-24 h-screen flex flex-col justify-center items-center">
      <img src="/icon/callToAction.svg" width={128} height={128} alt="" />
      <h1 className="mb-6 text-5xl font-extrabold text-slate-900">Ayo Mulai</h1>
      <p className="max-w-md text-center font-normal text-slate-700">
        Siap mengubah impian proyek Anda menjadi kenyataan? Jangan menunggu.
        Tingkatkan perangkat lunak dan kreasi digital Anda ke level selanjutnya
        dengan Bantuin.
      </p>
      <a href="#price">
        <button className="my-6 py-2 px-4 bg-slate-300 text-sm text-slate-900 font-bold rounded-lg hover:text-black hover:bg-slate-400/70 focus:outline-none transition-all">
          Mulai Sekarang!
        </button>
      </a>
    </div>
  );
}

export default CallToAction;
