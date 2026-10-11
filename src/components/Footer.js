
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Identitas Sekolah */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-full bg-white p-1">
                <img
                  src="/logo-smuhamka.png"
                  alt="Logo SMK Muhammadiyah Kajen"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold">SMK MUHAMKA</h2>
                <p className="text-sm text-emerald-300">
                  Islami, Kompeten dan Berdaya Saing
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md leading-7 text-emerald-100">
              Membangun generasi yang berkarakter Islami,
              kompeten, terampil, dan siap menghadapi dunia
              pendidikan maupun dunia kerja.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">
              Navigasi
            </h3>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-emerald-200 transition hover:text-orange-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-emerald-200 transition hover:text-orange-400"
                >
                  Profil Sekolah
                </Link>
              </li>

              <li>
                <Link
                  href="/berita"
                  className="text-emerald-200 transition hover:text-orange-400"
                >
                  Berita
                </Link>
              </li>

              <li>
                <Link
                  href="/#program-studi"
                  className="text-emerald-200 transition hover:text-orange-400"
                >
                  Program Studi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-bold">Kontak</h3>

            <div className="mt-4 space-y-3 text-emerald-200">
              <p>
                📍 Jl. Pahlawan, Kajen,
                Kabupaten Pekalongan,
                Jawa Tengah
              </p>

              <p>✉ smkmuhamka@gmail.com</p>

              <p>☎ (0285) 381464</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-emerald-800 pt-6 text-center">
          <p className="text-emerald-300">
            © 2026 SMK Muhammadiyah Kajen
          </p>

          <p className="mt-1 text-sm text-emerald-400">
            Hak Cipta Dilindungi Undang-Undang.
          </p>
        </div>
      </div>
    </footer>
  );
}
