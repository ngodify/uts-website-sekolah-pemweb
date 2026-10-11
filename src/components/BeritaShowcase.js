
"use client";

import { useRef } from "react";
import Link from "next/link";

export default function BeritaShowcase({ berita }) {
  const sliderRef = useRef(null);

  function geserKartu(arah) {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: arah * sliderRef.current.clientWidth * 0.8,
        behavior: "smooth",
      });
    }
  }

  return (
    <section className="overflow-hidden bg-[#003b2f] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Kabar SMK Muhamka
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Berita & Kegiatan
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-emerald-100">
              Ikuti cerita kegiatan, prestasi, dan pencapaian
              siswa SMK Muhammadiyah Kajen.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => geserKartu(-1)}
              aria-label="Berita sebelumnya"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-600 text-xl transition hover:border-orange-400 hover:bg-orange-500"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => geserKartu(1)}
              aria-label="Berita berikutnya"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-600 text-xl transition hover:border-orange-400 hover:bg-orange-500"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6"
        >
          {berita.map((item, index) => (
            <article
              key={item.id}
              className="group relative w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-[#064b3b] shadow-lg transition duration-300 hover:-translate-y-2 hover:border-orange-400/70 hover:shadow-2xl sm:w-[48%] lg:w-[32%]"
            >
              
<Link
  href={`/berita/${item.id}`}
  className="relative block h-auto min-h-64 overflow-hidden bg-emerald-900"
>

                
<img
  src={item.image}
  alt={item.title}
  className="block h-auto w-full object-contain"
/>


                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
                  {item.category}
                </span>

                <span className="absolute bottom-4 left-4 text-sm font-medium text-white/80">
                  {item.date}
                </span>

                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-emerald-950 transition group-hover:bg-orange-500 group-hover:text-white">
                  ↗
                </span>
              </Link>

              <div className="p-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-orange-400">
                  Berita 0{index + 1}
                </p>

                <h3 className="line-clamp-3 text-xl font-bold leading-7 text-white transition group-hover:text-orange-300">
                  {item.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-sm leading-7 text-emerald-100/80">
                  {item.summary}
                </p>

                <Link
                  href={`/berita/${item.id}`}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-orange-400 transition hover:text-orange-300"
                >
                  Baca Selengkapnya
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 text-center">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-7 py-3 font-bold text-white transition hover:bg-orange-500"
          >
            Lihat Semua Berita
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}