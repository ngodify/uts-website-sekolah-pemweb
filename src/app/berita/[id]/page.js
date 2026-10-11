import Link from "next/link";
import { notFound } from "next/navigation";
import { berita } from "@/data/berita";

export default async function DetailBerita({ params }) {
  const { id } = await params;

  const item = berita.find((berita) => berita.id === id);

  if (!item) {
    notFound();
  }

  return (
    <main className="bg-white">

      {/* ================= HEADER BERITA ================= */}
      <section className="bg-emerald-950 px-6 py-14 text-white">
        <div className="mx-auto max-w-4xl">

          {/* Kembali */}
          <Link
            href="/berita"
            className="text-sm font-medium text-emerald-200 transition hover:text-orange-400"
          >
            ← Kembali ke Berita
          </Link>

          {/* Judul */}
          <div className="mt-8">

            {/* Kategori */}
            <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold">
              {item.category}
            </span>

            {/* Judul Berita */}
            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              {item.title}
            </h1>

            {/* Tanggal */}
            <p className="mt-4 text-sm text-emerald-200">
              {item.date}
            </p>

          </div>
        </div>
      </section>


      {/* ================= ISI BERITA ================= */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">

          {/* Gambar Berita */}
          <div className="h-72 overflow-hidden rounded-3xl bg-emerald-50">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>


          {/* Ringkasan dan Isi */}
          <article className="mt-10">

            {/* Ringkasan */}
            <p className="text-lg font-medium leading-8 text-gray-700">
              {item.summary}
            </p>

            {/* Isi Berita */}
            <p className="mt-6 leading-8 text-gray-600">
              {item.content}
            </p>

          </article>


          {/* Tombol Kembali */}
          <div className="mt-10">
            <Link
              href="/berita"
              className="inline-block rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              ← Kembali ke Semua Berita
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}