
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menu = [
    { name: "Home", href: "/" },
    { name: "Profil", href: "/about" },
    { name: "Program Studi", href: "/program-studi" },
    { name: "Berita", href: "/berita" },
  ];

  return (
    <>
      <div className="bg-emerald-950 px-6 py-2 text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <span>✉ smkmuhamka@gmail.com</span>
          <span>☎ (0285) 381464</span>
        </div>
      </div>

      <header className="border-b border-gray-200 bg-white">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo-smuhamka.png"
              alt="Logo SMK Muhammadiyah Kajen"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold text-emerald-950">
                SMK MUHAMKA
              </h1>
              <p className="text-xs font-semibold text-emerald-600">
                ISLAMI, KOMPETEN DAN BERDAYA SAING
              </p>
            </div>
          </Link>

          <div className="flex flex-wrap items-center gap-5 md:gap-8">
            {menu.map((item) => {
              const aktif =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors duration-200 md:text-lg ${
                    aktif
                      ? "text-orange-500"
                      : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
}