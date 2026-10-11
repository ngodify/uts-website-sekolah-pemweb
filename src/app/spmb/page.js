
"use client";

import { useState } from "react";
import Link from "next/link";

export default function SpmbPage() {
  const [form, setForm] = useState({
    nama: "",
    nisn: "",
    asalSekolah: "",
    jurusan: "",
    noHp: "",
    alamat: "",
  });

  const [terkirim, setTerkirim] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTerkirim(true);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-emerald-950 px-6 py-14 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-300">
            Penerimaan Murid Baru
          </p>

          <h1 className="text-3xl font-bold md:text-5xl">
            Pendaftaran SPMB Online
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-emerald-100">
            SMK Muhammadiyah Kajen membuka kesempatan bagi calon murid
            untuk mengenal sekolah dan memilih program keahlian.
            Silakan lengkapi formulir berikut.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
          {terkirim ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700">
                ✓
              </div>

              <h2 className="mt-5 text-2xl font-bold text-emerald-950">
                Formulir Berhasil Diisi!
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                Terima kasih telah mencoba formulir SPMB SMK Muhammadiyah
                Kajen. Ini merupakan simulasi formulir website dan data
                belum dikirim atau disimpan ke server sekolah.
              </p>

              <button
                type="button"
                onClick={() => {
                  setTerkirim(false);
                  setForm({
                    nama: "",
                    nisn: "",
                    asalSekolah: "",
                    jurusan: "",
                    noHp: "",
                    alamat: "",
                  });
                }}
                className="mt-6 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
              >
                Isi Formulir Lagi
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-emerald-950">
                Formulir Calon Murid
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Kolom bertanda * wajib diisi.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="nama" className="mb-2 block font-medium text-gray-700">
                    Nama Lengkap *
                  </label>
                  <input
                    id="nama"
                    name="nama"
                    value={form.nama}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label htmlFor="nisn" className="mb-2 block font-medium text-gray-700">
                    NISN *
                  </label>
                  <input
                    id="nisn"
                    name="nisn"
                    value={form.nisn}
                    onChange={handleChange}
                    required
                    inputMode="numeric"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    placeholder="Masukkan NISN"
                  />
                </div>

                <div>
                  <label htmlFor="asalSekolah" className="mb-2 block font-medium text-gray-700">
                    Asal Sekolah *
                  </label>
                  <input
                    id="asalSekolah"
                    name="asalSekolah"
                    value={form.asalSekolah}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    placeholder="Contoh: SMP Muhammadiyah"
                  />
                </div>

                <div>
                  <label htmlFor="jurusan" className="mb-2 block font-medium text-gray-700">
                    Pilihan Program Keahlian *
                  </label>
                  <select
                    id="jurusan"
                    name="jurusan"
                    value={form.jurusan}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="">Pilih program keahlian</option>
                    <option value="TAV">Teknik Audio Video (TAV)</option>
                    <option value="TKR">Teknik Kendaraan Ringan (TKR)</option>
                    <option value="TKJ">Teknik Komputer dan Jaringan (TKJ)</option>
                    <option value="KA">Kimia Analisis (KA)</option>
                    <option value="KI">Kimia Industri (KI)</option>
                    <option value="TPTU">Teknik Pendingin dan Tata Udara (TPTU)</option>
                    <option value="TSM">Teknik Sepeda Motor (TSM)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="noHp" className="mb-2 block font-medium text-gray-700">
                    Nomor HP/WhatsApp *
                  </label>
                  <input
                    id="noHp"
                    name="noHp"
                    type="tel"
                    value={form.noHp}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    placeholder="Contoh: 08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="alamat" className="mb-2 block font-medium text-gray-700">
                    Alamat Lengkap *
                  </label>
                  <textarea
                    id="alamat"
                    name="alamat"
                    value={form.alamat}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    placeholder="Masukkan alamat lengkap"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600"
                >
                  Kirim Formulir
                </button>

                <p className="text-center text-xs leading-5 text-gray-500">
                  Formulir ini merupakan demonstrasi frontend, bukan
                  pendaftaran resmi sekolah.
                </p>
              </form>
            </>
          )}

          <div className="mt-8 border-t border-gray-100 pt-6">
            <Link
              href="/"
              className="font-semibold text-emerald-800 hover:text-orange-600"
            >
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
