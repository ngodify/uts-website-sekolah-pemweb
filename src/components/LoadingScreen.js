
"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let hideTimer;

    const timer = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(timer);
          hideTimer = setTimeout(() => {
            setVisible(false);
          }, 400);

          return 100;
        }

        return Math.min(current + 1, 100);
      });
    }, 25);

    return () => {
      clearInterval(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-[#003329] text-white">
      <div className="flex flex-col items-center px-6">

        {/* Logo dengan lingkaran berputar */}
        <div className="relative flex h-28 w-28 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-[5px] border-emerald-800 border-t-amber-400" />

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#004638]">
            <img
              src="/logo-smuhamka.png"
              alt="Logo SMK Muhammadiyah Kajen"
              className="h-14 w-14 object-contain"
            />
          </div>
        </div>

        {/* Nama sekolah */}
        <h1 className="mt-7 text-2xl font-extrabold tracking-wider text-emerald-50">
          SMK MUHAMKA
        </h1>

        {/* Progress bar dan persentase */}
        <div className="mt-4 flex items-center gap-4">
          <div className="h-[7px] w-44 overflow-hidden rounded-full bg-emerald-900">
            <div
              className="h-full rounded-full bg-amber-400 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="w-10 text-right text-sm font-bold text-amber-400">
            {progress}%
          </span>
        </div>

        {/* Teks kecil */}
        <p className="mt-5 text-xs tracking-[0.2em] text-emerald-300">
          ISLAMI, KOMPETEN DAN BERDAYA SAING
        </p>

      </div>
    </div>
  );
}