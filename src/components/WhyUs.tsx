"use client";

import { useEffect } from 'react';

export default function WhyUs() {
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('why-us');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          // Placeholder: Bisa digunakan untuk trigger animasi
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const reasons = [
    {
      title: "Teknologi AI Terdepan",
      description:
        "Kami menggunakan teknologi kecerdasan buatan terbaru untuk memberikan deteksi ancaman yang akurat dan cepat.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Pembaruan Berkelanjutan",
      description:
        "Database ancaman kami terus diperbarui untuk melindungi Anda dari jenis penipuan dan ancaman terbaru.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Keamanan Tingkat Tinggi",
      description:
        "Kami memprioritaskan keamanan data Anda dengan enkripsi end-to-end dan perlindungan privasi yang ketat.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Dukungan 24/7",
      description:
        "Tim dukungan kami siap membantu Anda dengan pertanyaan atau masalah keamanan kapan saja.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Mengapa Memilih Security Guard?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Kami berkomitmen untuk menyediakan solusi keamanan terbaik yang dapat diandalkan untuk melindungi data dan privasi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex-shrink-0 mr-4 text-primary-blue">{reason.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-primary-blue mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-primary-blue font-semibold mb-6">
            Bergabunglah dengan ribuan pengguna yang telah mempercayai Security Guard untuk melindungi data mereka
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center">
              <div className="text-4xl font-bold text-primary-blue">10K+</div>
              <div className="ml-2 text-left">
                <div className="text-sm text-gray-500">Pengguna</div>
                <div className="text-sm text-gray-500">Aktif</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-4xl font-bold text-primary-blue">500+</div>
              <div className="ml-2 text-left">
                <div className="text-sm text-gray-500">Ancaman</div>
                <div className="text-sm text-gray-500">Terdeteksi</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-4xl font-bold text-primary-blue">99%</div>
              <div className="ml-2 text-left">
                <div className="text-sm text-gray-500">Tingkat</div>
                <div className="text-sm text-gray-500">Akurasi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
