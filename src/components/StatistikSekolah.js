"use client";

import { useEffect, useRef, useState } from "react";

const statistik = [
  { angka: 1400, label: "Jumlah Siswa", ikon: "graduation-cap" },
  { angka: 90, label: "Guru & Pendidik", ikon: "presentation" },
  { angka: 30, label: "Karyawan / Staf", ikon: "users" },
  { angka: 10000, label: "Total Alumni", ikon: "award" },
];

// ANIMASI ANGKA
function AngkaBergerak({ target }) {
  const [angka, setAngka] = useState(0);
  const [mulai, setMulai] = useState(false);
  const elemenRef = useRef(null);

  useEffect(() => {
    const elemen = elemenRef.current;
    if (!elemen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMulai(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(elemen);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mulai) return;

    let awal = null;
    let frame;

    function animasi(waktu) {
      if (awal === null) awal = waktu;

      const progres = Math.min((waktu - awal) / 1800, 1);
      const halus = 1 - Math.pow(1 - progres, 3);

      setAngka(Math.floor(target * halus));

      if (progres < 1) {
        frame = requestAnimationFrame(animasi);
      } else {
        setAngka(target);
      }
    }

    frame = requestAnimationFrame(animasi);
    return () => cancelAnimationFrame(frame);
  }, [mulai, target]);

  return (
    <span ref={elemenRef}>
      {angka.toLocaleString("id-ID")}
      {mulai ? "+" : ""}
    </span>
  );
}

// IKON STATISTIK
function IkonStatistik({ nama }) {
  const ikon = {
    "graduation-cap": (
      <>
        <path d="m2 10 10-5 10 5-10 5-10-5Z" />
        <path d="M6 12v5c3 2 9 2 12 0v-5" />
        <path d="M22 10v6" />
      </>
    ),
    presentation: (
      <>
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M12 17v4M8 21h8M7 12l3-3 3 2 4-4" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="m8.2 13-1.2 9 5-3 5 3-1.2-9" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ikon[nama]}
    </svg>
  );
}

// KOMPONEN UTAMA STATISTIK SEKOLAH
export default function StatistikSekolah() {
  return (
    <section className="bg-white px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {statistik.map((item) => (
          <div
            key={item.label}
            className="flex min-h-[250px] flex-col items-center justify-center rounded-[28px] border border-emerald-100 bg-white px-4 py-8 text-center transition-colors duration-300 hover:border-orange-200"
          >
            {/* IKON ORANYE */}
            <div className="flex h-[68px] w-[68px] items-center justify-center rounded-[22px] bg-orange-50 text-orange-600">
              <IkonStatistik nama={item.ikon} />
            </div>

            {/* ANGKA BERGERAK */}
            <div className="mt-6 text-4xl font-extrabold tracking-tight text-emerald-950 md:text-[42px]">
              <AngkaBergerak target={item.angka} />
            </div>

            {/* LABEL */}
            <p className="mt-3 text-base font-medium text-slate-600">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}