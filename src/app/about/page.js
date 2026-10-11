import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* ================= HEADER ================= */}
      <section className="bg-emerald-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            Profil Sekolah
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            SMK Muhammadiyah Kajen
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-100">
            Islami, Kompeten dan Berdaya Saing
          </p>

        </div>
      </section>


      {/* ================= PROFIL ================= */}
      <section className="px-6 py-16">

        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

          {/* Logo */}
          <div className="flex justify-center">

            <div className="flex h-80 w-80 items-center justify-center rounded-3xl bg-emerald-50 p-10 shadow-sm">

              <img
                src="/logo-smuhamka.png"
                alt="Logo SMK Muhammadiyah Kajen"
                className="h-full w-full object-contain"
              />

            </div>

          </div>


          {/* Deskripsi */}
          <div>

            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              TENTANG SEKOLAH
            </span>

            <h2 className="mt-4 text-3xl font-bold text-emerald-950">
              Sekolah Kejuruan dengan Karakter Islami
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              SMK Muhammadiyah Kajen merupakan sekolah menengah
              kejuruan yang berada di Kabupaten Pekalongan, Jawa Tengah.
              Sekolah ini berkomitmen memberikan pendidikan kejuruan
              yang mengembangkan kompetensi, karakter, keterampilan,
              serta kesiapan peserta didik menghadapi dunia kerja.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Dengan semangat
              <span className="font-semibold text-emerald-700">
                {" "}“Islami, Kompeten dan Berdaya Saing”
              </span>,
              SMK Muhammadiyah Kajen terus mendorong peserta didik
              untuk berkembang secara akademik maupun nonakademik.
            </p>

          </div>

        </div>

      </section>


      {/* ================= SEJARAH ================= */}
      <section className="bg-emerald-50 px-6 py-16">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700">
              SEJARAH
            </span>

            <h2 className="mt-4 text-3xl font-bold text-emerald-950">
              Perjalanan SMK Muhammadiyah Kajen
            </h2>

          </div>

          <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">

            <p className="leading-8 text-gray-600">
              SMK Muhammadiyah Kajen didirikan pada tahun 2002
              oleh Pimpinan Cabang Muhammadiyah Kajen. Sejak awal
              berdirinya, sekolah terus berkembang dalam memberikan
              pendidikan kejuruan bagi generasi muda di Kabupaten
              Pekalongan.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Dalam perkembangannya, SMK Muhammadiyah Kajen berupaya
              meningkatkan kualitas pendidikan, kompetensi peserta
              didik, kegiatan sekolah, serta hubungan dengan dunia
              kerja dan masyarakat.
            </p>

          </div>

        </div>

      </section>


      {/* ================= VISI MISI ================= */}
      <section className="px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
              VISI & MISI
            </span>

            <h2 className="mt-4 text-3xl font-bold text-emerald-950">
              Arah dan Tujuan Sekolah
            </h2>

          </div>


          <div className="grid gap-8 md:grid-cols-2">

            {/* Visi */}
            <div className="rounded-3xl bg-emerald-900 p-8 text-white">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-xl font-bold">
                V
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Visi
              </h3>

              <p className="mt-5 leading-8 text-emerald-100">
                Menjadi SMK yang unggul dalam prestasi,
                berkarakter Islami, terampil, dan berwawasan global.
              </p>

            </div>


            {/* Misi */}
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-xl font-bold text-white">
                M
              </div>

              <h3 className="mt-5 text-2xl font-bold text-emerald-950">
                Misi
              </h3>

              <ul className="mt-5 space-y-4 text-gray-600">

                <li className="flex gap-3">
                  <span className="font-bold text-orange-500">01</span>
                  <span>
                    Mengembangkan karakter peserta didik yang Islami
                    dan berakhlak mulia.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-orange-500">02</span>
                  <span>
                    Meningkatkan kompetensi dan keterampilan peserta
                    didik sesuai kebutuhan dunia kerja.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-orange-500">03</span>
                  <span>
                    Mendorong prestasi akademik maupun nonakademik.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-orange-500">04</span>
                  <span>
                    Mempersiapkan peserta didik agar mampu bersaing
                    dan beradaptasi dengan perkembangan teknologi.
                  </span>
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INFORMASI SEKOLAH ================= */}
      <section className="bg-emerald-50 px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-bold text-emerald-700">
              INFORMASI
            </span>

            <h2 className="mt-4 text-3xl font-bold text-emerald-950">
              Informasi Sekolah
            </h2>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                Nama Sekolah
              </p>

              <p className="mt-2 font-bold text-emerald-950">
                SMK Muhammadiyah Kajen
              </p>
            </div>


            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                Tahun Berdiri
              </p>

              <p className="mt-2 text-2xl font-bold text-emerald-700">
                2002
              </p>
            </div>


            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                Lokasi
              </p>

              <p className="mt-2 font-bold text-emerald-950">
                Kajen, Pekalongan
              </p>
            </div>


            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                Slogan
              </p>

              <p className="mt-2 font-bold text-emerald-700">
                Islami, Kompeten dan Berdaya Saing
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="px-6 py-16">

        <div className="mx-auto max-w-5xl rounded-3xl bg-emerald-900 px-8 py-12 text-center text-white">

          <h2 className="text-3xl font-bold">
            Ingin Mengetahui Kegiatan SMK Muhamka?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-emerald-200">
            Temukan berbagai informasi kegiatan dan prestasi
            terbaru SMK Muhammadiyah Kajen melalui halaman berita.
          </p>

          <Link
            href="/berita"
            className="mt-7 inline-block rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Lihat Berita
          </Link>

        </div>

      </section>

    </main>
  );
}