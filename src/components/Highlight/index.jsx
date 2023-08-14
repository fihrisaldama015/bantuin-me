import Services from "./Services";

function Highlight() {
  return (
    <div
      className="md:py-24 md:px-48 sm:py-12 sm:px-24 p-8 bg-slate-700 flex flex-col gap-12"
      id="service"
    >
      <Services
        content="left"
        title="Desain dan Pengembangan Website"
        img="/Pengembangan.jpg"
      >
        Kami menggunakan teknologi terkini dan praktik terbaik dalam memastikan
        website Anda memiliki tampilan yang menarik, fungsional, dan responsif
        di berbagai perangkat.
      </Services>
      <Services
        content="right"
        title="Optimisasi Mesin Pencari (SEO)"
        img="/seo.png"
      >
        Dengan strategi SEO yang efektif, kami membantu meningkatkan visibilitas
        online Anda dan mengarahkan lalu lintas yang relevan ke website Anda.
      </Services>
      <Services
        content="left"
        title="Integrasi E-commerce"
        img="/ecommerce.png"
      >
        Membantu Anda mengintegrasikan solusi e-commerce yang sesuai dengan
        kebutuhan bisnis Anda. Kami dapat mengembangkan toko online yang aman,
        user-friendly, dan mudah dikelola.
      </Services>
      <Services
        content="right"
        title="Desain Grafis dan Identitas Merek"
        img="/brand.jpeg"
      >
        Selain pengembangan website, kami juga menyediakan layanan desain grafis
        untuk logo, brosur, pamflet, dan materi pemasaran lainnya. Kami dapat
        membantu menciptakan identitas merek yang konsisten dan menarik untuk
        meningkatkan citra bisnis Anda.
      </Services>
    </div>
  );
}

export default Highlight;
