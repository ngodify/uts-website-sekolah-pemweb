
import Link from "next/link";
import { berita } from "@/data/berita";
import BeritaCard from "@/components/BeritaCard";

export default function BeritaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <section className="bg-emerald-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Kabar SMK Muhamka
          </p>

          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Berita & Kegiatan
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-emerald-100">
            Ikuti informasi terbaru mengenai kegiatan sekolah,
            prestasi siswa, dan berbagai aktivitas SMK Muhammadiyah Kajen.
          </p>
        </div>
      </section>

      {/* DAFTAR BERITA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
              INFORMASI SEKOLAH
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-emerald-950">
              Kabar Terbaru
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Cerita, pencapaian, dan kegiatan dari keluarga besar
              SMK Muhammadiyah Kajen.
            </p>
          </div>

          <p className="mb-6 text-sm font-semibold text-emerald-800">
            {berita.length} berita tersedia
          </p>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {berita.map((item) => (
              <BeritaCard key={item.id} berita={item} />
            ))}
          </div>

          {/* TOMBOL KEMBALI */}
          <div className="mt-14 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              ← Kembali ke Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
