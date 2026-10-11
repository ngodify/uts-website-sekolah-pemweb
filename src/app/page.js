
import Link from "next/link";
import { berita } from "@/data/berita";
import BeritaShowcase from "@/components/BeritaShowcase";
import StatistikSekolah from "@/components/StatistikSekolah";
import BannerCarousel from "@/components/BannerCarousel";
// DATA PROGRAM STUDI
const programStudi = [
  {
    kode: "TAV",
    nama: "Teknik Audio Video",
    gambar: "/tav.jpg",
    deskripsi:
      "Mempelajari teknologi audio video, elektronika, serta perakitan dan perawatan perangkat elektronik.",
  },
  {
    kode: "TKR",
    nama: "Teknik Kendaraan Ringan",
    gambar: "/tkr.jpg",
    deskripsi:
      "Mempelajari pemeriksaan, perawatan, dan perbaikan kendaraan ringan beserta sistem pendukungnya.",
  },
  {
    kode: "TKJ",
    nama: "Teknik Komputer dan Jaringan",
    gambar: "/tkj.jpg",
    deskripsi:
      "Mempelajari perangkat komputer, instalasi jaringan, konfigurasi, dan pemeliharaan jaringan komputer.",
  },
  {
    kode: "KA",
    nama: "Kimia Analisis",
    gambar: "/ka.jpg",
    deskripsi:
      "Mengenal teknik analisis dan pengujian sampel untuk mengetahui kandungan serta kualitas bahan.",
  },
  {
    kode: "KI",
    nama: "Kimia Industri",
    gambar: "/ki.jpg",
    deskripsi:
      "Mempelajari proses kimia industri, pengolahan bahan, dan pengendalian kualitas produk.",
  },
  {
    kode: "TPTU",
    nama: "Teknik Pendingin dan Tata Udara",
    gambar: "/tptu.jpg",
    deskripsi:
      "Mempelajari instalasi, pengoperasian, pemeriksaan, dan perawatan sistem pendingin serta tata udara.",
  },
  {
    kode: "TSM",
    nama: "Teknik Sepeda Motor",
    gambar: "/tsm.jpg",
    deskripsi:
      "Mempelajari sistem kendaraan sepeda motor, perawatan berkala, pemeriksaan, dan perbaikan.",
  },
];

export default function Home() {
  return (
    <main className="bg-white">
{/* HERO BANNER INTERAKTIF */}
<section className="relative overflow-hidden bg-[#003b2f] px-4 py-8 md:px-8 md:py-12">
  <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center overflow-hidden rounded-[32px] bg-emerald-950 md:min-h-[600px]">

    {/* GAMBAR BANNER */}
    <img
      src="/banner-smuhamka.png"
      alt="SMK Muhammadiyah Kajen"
      className="absolute inset-0 h-full w-full object-cover"
    />

    {/* OVERLAY AGAR TEKS TERBACA */}
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/65 to-transparent" />

    {/* KONTEN HERO */}
    <div className="relative z-10 max-w-3xl px-7 py-20 text-white md:px-16">

      <span className="inline-block rounded-full bg-orange-500 px-5 py-3 text-sm font-bold tracking-wide">
        SMK MUHAMMADIYAH KAJEN
      </span>

      <h1 className="mt-8 text-4xl font-extrabold leading-tight md:text-6xl">
        Islami, Kompeten, dan Berdaya Saing
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50 md:text-xl">
        Membangun generasi yang berkarakter Islami, kompeten, terampil,
        dan siap menghadapi tantangan masa depan.
      </p>

      {/* TOMBOL NAVIGASI */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/about"
          className="rounded-full bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
        >
          Profil Sekolah
        </a>

        <a
          href="/berita"
          className="rounded-full border border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-emerald-950"
        >
          Lihat Berita
        </a>
      </div>

    </div>

    {/* DEKORASI LINGKARAN */}
    <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full border-[35px] border-white/10 md:h-96 md:w-96" />

  </div>
</section>
      {/* PROFIL SINGKAT */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
                TENTANG KAMI
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-emerald-950 md:text-4xl">
                SMK Muhammadiyah Kajen
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                SMK Muhammadiyah Kajen merupakan sekolah menengah kejuruan
                yang berkomitmen membentuk peserta didik yang berkarakter
                Islami, kompeten, terampil, dan memiliki daya saing.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Dengan semangat pendidikan dan pengembangan kompetensi,
                SMK Muhamka terus mendorong siswa untuk mengembangkan potensi
                akademik maupun nonakademik sebagai bekal menghadapi dunia
                pendidikan dan dunia kerja.
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
              >
                Selengkapnya →
              </Link>
            </div>

            <div className="rounded-3xl bg-emerald-50 p-8">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                  Slogan Sekolah
                </p>

                <h3 className="mt-4 text-3xl font-bold leading-tight text-emerald-950">
                  “Islami, Kompeten dan Berdaya Saing”
                </h3>

                <div className="mt-7 h-1 w-16 rounded-full bg-orange-500"></div>

                <p className="mt-6 leading-7 text-gray-600">
                  Menjadi bagian dari pendidikan yang tidak hanya
                  mengembangkan keterampilan, tetapi juga karakter dan
                  kesiapan siswa menghadapi perkembangan zaman.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* STATISTIK SEKOLAH */}
<StatistikSekolah />
      {/* BERITA DAN KEGIATAN */}
      <BeritaShowcase berita={berita} />

      {/* PROGRAM STUDI */}
      <section
  id="program-studi"
  className="bg-gray-50 px-6 py-20 scroll-mt-20"
>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
              PENDIDIKAN DAN KEAHLIAN
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-emerald-950 md:text-4xl">
              Program Keahlian
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Kenali program keahlian SMK Muhammadiyah Kajen dan temukan
              bidang yang sesuai dengan minat serta potensimu.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programStudi.map((prodi, index) => (
              <article
                key={prodi.kode}
                className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
              >
                {/* Foto program studi */}
                <div className="h-48 overflow-hidden bg-emerald-100">
                  <img
                    src={prodi.gambar}
                    alt={`Foto program ${prodi.nama}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 min-w-12 items-center justify-center rounded-xl bg-emerald-950 px-3 text-sm font-extrabold text-white transition group-hover:bg-orange-500">
                      {prodi.kode}
                    </span>

                    <span className="text-sm font-bold text-emerald-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-7 text-emerald-950">
                    {prodi.nama}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {prodi.deskripsi}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/program-studi"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600"
            >
              Lihat Semua Program Keahlian →
            </Link>
          </div>
        </div>
      </section>

      {/* HUBUNGI KAMI */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              LOKASI & KONTAK
            </span>

            <h2 className="mt-4 text-3xl font-bold text-emerald-950 md:text-4xl">
              Hubungi Kami
            </h2>

            <p className="mt-3 text-gray-600">
              Kunjungi sekretariat sekolah atau sampaikan pesan melalui formulir.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Informasi Kontak */}
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-700 text-2xl text-white">
                    📍
                  </div>

                  <div>
                    <h3 className="font-bold text-emerald-950">
                      Alamat Sekolah
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Jl. Pahlawan No. Kajen, Kabupaten Pekalongan, Jawa Tengah
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-700 text-2xl text-white">
                    ✉
                  </div>

                  <div>
                    <h3 className="font-bold text-emerald-950">
                      Email Resmi
                    </h3>
                    <p className="mt-1 text-gray-600">
                      smkmuhamka@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-700 text-2xl text-white">
                    ☎
                  </div>

                  <div>
                    <h3 className="font-bold text-emerald-950">
                      Telepon
                    </h3>
                    <p className="mt-1 text-gray-600">
                      (0285) 381464
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Kontak */}
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">
              <div className="space-y-5">
                <div>
                  <label className="font-semibold text-gray-700">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="font-semibold text-gray-700">
                    Email / WhatsApp
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="font-semibold text-gray-700">
                    Pesan Anda
                  </label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 outline-none transition focus:border-emerald-600"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PETA */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl rounded-3xl border border-emerald-100 bg-emerald-50 p-5">
          <h2 className="mb-5 text-xl font-bold text-emerald-950">
            📍 Peta Lokasi di Google Maps
          </h2>

          <div className="overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps?q=SMK%20Muhammadiyah%20Kajen%20Pekalongan&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              title="Lokasi SMK Muhammadiyah Kajen"
            ></iframe>
          </div>
        </div>
      </section>

      {/* STATISTIK WEBSITE */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl rounded-3xl bg-emerald-900 p-7 text-white md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                Statistik Website
              </h2>
              <p className="mt-2 text-emerald-200">
                Informasi singkat mengenai website SMK Muhamka.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-2xl bg-emerald-950 px-6 py-5 text-center">
                <p className="text-2xl font-bold text-orange-400">6</p>
                <p className="mt-1 text-xs text-emerald-200">Berita</p>
              </div>

              <div className="rounded-2xl bg-emerald-950 px-6 py-5 text-center">
                <p className="text-2xl font-bold text-orange-400">7</p>
                <p className="mt-1 text-xs text-emerald-200">Program Keahlian</p>
              </div>

              <div className="rounded-2xl bg-emerald-950 px-6 py-5 text-center">
                <p className="text-2xl font-bold text-orange-400">3</p>
                <p className="mt-1 text-xs text-emerald-200">Halaman Utama</p>
              </div>

              <div className="rounded-2xl bg-emerald-950 px-6 py-5 text-center">
                <p className="text-2xl font-bold text-orange-400">2026</p>
                <p className="mt-1 text-xs text-emerald-200">Tahun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING SPMB */}
      <Link
        href="/about"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-orange-500 px-5 py-4 text-sm font-bold text-white shadow-xl transition hover:bg-orange-600"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg text-orange-500">
          👤+
        </span>

        <span className="hidden sm:block">
          PENDAFTARAN
          <br />
          <span className="text-base">SPMB Online</span>
        </span>
      </Link>
    </main>
  );
}