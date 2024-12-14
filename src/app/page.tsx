import React from "react";

const Home: React.FC = () => {
  return (
    <div className="scroll-smooth font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full p-4 bg-white text-text-black shadow-md z-10 transition-transform duration-300 ease-in-out hover:shadow-lg">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">Nihongo Kurabu</h1>
          <nav>
            <ul className="flex gap-4 md:gap-6">
              {[
                { href: "#hero", label: "Home" },
                { href: "#activities", label: "Aktivitas" },
                { href: "#divisions", label: "Divisi" },
                { href: "#articles", label: "Artikel" },
                { href: "#join", label: "Bergabung" }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-mountain-dark transition-colors duration-200 underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-tosca-green text-white px-6 py-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Selamat Datang di Nihongo Kurabu
        </h2>
        <p className="text-base md:text-lg mb-8 max-w-2xl">
          Jelajahi keindahan bahasa dan budaya Jepang bersama kami! Bergabunglah
          untuk belajar, berbagi, dan mengalami pengalaman unik.
        </p>
        <a
          href="#activities"
          className="px-6 py-3 bg-white text-mountain-dark font-medium rounded-full shadow-md hover:shadow-lg hover:bg-sakura-pink hover:text-text-black transition-transform transform hover:scale-105"
        >
          Lihat Aktivitas Kami
        </a>
      </section>

      {/* Upcoming Events */}
      <section
        id="activities"
        className="min-h-screen flex flex-col items-center justify-center bg-white text-text-black px-6 lg:px-16 py-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-mountain-dark">
          Aktivitas Mendatang
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Workshop Kaligrafi",
              date: "15 Desember 2024",
              location: "Aula SMAN 3 Bukittinggi",
              description: "Pelajari seni menulis huruf Jepang dengan instruktur berpengalaman."
            },
            {
              title: "Festival Budaya",
              date: "20 Januari 2025",
              location: "Lapangan Sekolah",
              description: "Nikmati makanan Jepang, cosplay, dan pertunjukan seni."
            },
            {
              title: "Kelas Bahasa Jepang",
              date: "25 Februari 2025",
              location: "Ruang 103",
              description: "Tingkatkan kemampuan berbicara Jepang dengan guru native."
            }
          ].map((event, index) => (
            <div
              key={index}
              className="bg-sakura-pink rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            >
              <h4 className="text-xl font-bold mb-2">{event.title}</h4>
              <p className="text-sm text-gray-700 mb-4">
                Tanggal: {event.date} | Lokasi: {event.location}
              </p>
              <p className="text-sm text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Divisions Section */}
      <section
        id="divisions"
        className="min-h-screen flex flex-col items-center justify-center bg-mountain-dark text-white px-6 lg:px-16 py-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Divisi</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="bg-white text-text-black rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 text-center"
            >
              <h4 className="text-xl font-bold mb-2">Divisi {index + 1}</h4>
              <p className="text-sm text-gray-700">Deskripsi singkat tentang divisi ini.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section
        id="articles"
        className="min-h-screen flex flex-col items-center justify-center bg-white text-text-black px-6 lg:px-16 py-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-mountain-dark">
          Artikel Terbaru
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="bg-sakura-pink rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 text-center"
            >
              <h4 className="text-xl font-bold mb-2">Artikel {index + 1}</h4>
              <p className="text-sm text-gray-700">Ringkasan singkat dari artikel ini.</p>
              <a
                href="#"
                className="mt-4 inline-block text-mountain-dark underline hover:text-mountain-dark-darker"
              >
                Baca Selengkapnya
              </a>
            </div>
          ))}
          </div>
      </section>

      {/* Join Us Section */}
      <section
        id="join"
        className="min-h-screen flex flex-col items-center justify-center bg-mountain-dark text-white px-6 lg:px-16 py-16 text-center"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Bergabung dengan Kami</h3>
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Jadi bagian dari komunitas Nihongo Kurabu dan eksplor keindahan bahasa
          serta budaya Jepang! Isi form di bawah ini untuk mendaftar.
        </p>
        <a
          href="/join"
          className="px-8 py-3 bg-sakura-pink text-text-black font-medium rounded-full shadow-md hover:shadow-lg hover:bg-white hover:text-mountain-dark transition-transform transform hover:scale-105"
        >
          Daftar Sekarang
        </a>
      </section>
    </div>
  );
};

export default Home;