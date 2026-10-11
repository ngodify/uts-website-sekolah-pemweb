
import Link from "next/link";

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

export default function ProgramStudiPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-emerald-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-orange-400">
            Pendidikan dan Keahlian
          </p>

          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Program Studi
          </h1>

          <p className="mt-5 max-w-2xl leading-8 text-emerald-100">
            Kenali tujuh program keahlian SMK Muhammadiyah Kajen
            untuk mengembangkan minat, potensi, dan keterampilan
            sebagai bekal masa depan.
          </p>
        </div>
      </section>

      {/* Daftar Program Studi */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
              7 PROGRAM KEAHLIAN
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-emerald-950">
              Temukan Bidang Keahlianmu!
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
              Setiap program keahlian memberikan kesempatan kepada
              peserta didik untuk belajar dan mengembangkan keterampilan
              sesuai bidang yang diminati.
            </p>
          </div>

          {/* Kartu program studi */}
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

                {/* Informasi program studi */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 min-w-14 items-center justify-center rounded-xl bg-emerald-950 px-3 text-sm font-extrabold text-white transition duration-300 group-hover:bg-orange-500">
                      {prodi.kode}
                    </div>

                    <span className="text-sm font-bold text-emerald-300 transition group-hover:text-orange-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold leading-7 text-emerald-950">
                    {prodi.nama}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {prodi.deskripsi}
                  </p>

                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <span className="inline-flex items-center gap-2 font-bold text-emerald-700 transition group-hover:text-orange-500">
                      Program Keahlian
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Tombol kembali ke Home */}
          <div className="mt-12 text-center">
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