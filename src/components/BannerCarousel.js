
"use client";

import { useEffect, useState } from "react";

const banners = [
  {
    image: "/banner-smuhamka.png",
    label: "SMK MUHAMMADIYAH KAJEN",
    title: "Islami, Kompeten, dan Berdaya Saing",
    description:
      "Membangun generasi yang berkarakter Islami, kompeten, terampil, dan siap menghadapi masa depan.",
  },
  {
    image: "/banner-sekolah-2.jpg",
    label: "KEGIATAN SEKOLAH",
    title: "Belajar, Berkarya, dan Berprestasi",
    description:
      "Mengembangkan potensi siswa melalui pembelajaran, praktik, dan kegiatan sekolah.",
  },
  {
    image: "/banner-sekolah-3.jpg",
    label: "PROGRAM KEAHLIAN",
    title: "Siap Menghadapi Dunia Kerja",
    description:
      "Mempersiapkan siswa dengan keterampilan kejuruan untuk meraih masa depan.",
  },
];

export default function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  function geserSlide(arah) {
    setActiveIndex(
      (prev) => (prev + arah + banners.length) % banners.length
    );
  }

  const banner = banners[activeIndex];

  return (
    <section className="relative w-full overflow-hidden bg-emerald-950">
      <div className="relative flex min-h-[520px] w-full items-center overflow-hidden bg-emerald-950 md:min-h-[700px]">
        <img
          key={banner.image}
          src={banner.image}
          alt={banner.label}
          className="absolute inset-0 z-0 block h-full w-full rounded-none object-cover object-center"
        />

        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-emerald-950/85 via-emerald-950/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 py-24 text-white md:px-16 lg:px-20">
          <span className="inline-block rounded-full bg-orange-500 px-5 py-3 text-sm font-bold md:text-base">
            {banner.label}
          </span>

          <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            {banner.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-emerald-50 md:text-xl md:leading-9">
            {banner.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/about"
              className="rounded-full bg-orange-500 px-7 py-4 font-bold transition hover:bg-orange-600"
            >
              Profil Sekolah
            </a>

            <a
              href="/berita"
              className="rounded-full border border-white px-7 py-4 font-bold transition hover:bg-white hover:text-emerald-950"
            >
              Lihat Berita
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => geserSlide(-1)}
          aria-label="Banner sebelumnya"
          className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-3xl text-emerald-950 shadow-lg transition hover:bg-orange-500 hover:text-white md:left-6 md:h-12 md:w-12"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={() => geserSlide(1)}
          aria-label="Banner berikutnya"
          className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-3xl text-emerald-950 shadow-lg transition hover:bg-orange-500 hover:text-white md:right-6 md:h-12 md:w-12"
        >
          ›
        </button>

        <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {banners.map((item, index) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={"Pilih banner " + (index + 1)}
              className={
                "h-3 rounded-full transition-all duration-300 " +
                (activeIndex === index
                  ? "w-10 bg-orange-500"
                  : "w-3 bg-white/70 hover:bg-white")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
