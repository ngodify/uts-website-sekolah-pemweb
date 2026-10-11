"use client";

import Link from "next/link";

export default function BeritaCard({ berita: item }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      
<Link
  href={`/berita/${item.id}`}
  className="block overflow-hidden bg-emerald-50"
>
  <img
    src={item.image}
    alt={item.title}
    className="block h-auto w-full object-contain"
  />
</Link>


      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full bg-orange-100 px-3 py-1 font-semibold text-orange-700">
            {item.category}
          </span>
          <span className="text-gray-500">{item.date}</span>
        </div>

        <h2 className="mt-4 text-xl font-bold leading-7 text-emerald-950">
          {item.title}
        </h2>

        <p className="mt-3 line-clamp-3 leading-7 text-gray-600">
          {item.summary}
        </p>

        <Link
          href={`/berita/${item.id}`}
          className="mt-5 inline-flex font-bold text-emerald-700 hover:text-orange-600"
        >
          Baca Selengkapnya →
        </Link>
      </div>
    </article>
  );
}