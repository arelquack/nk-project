// import React from "react";

// const Home: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-tosca-green text-white">
//       <header className="p-6 bg-sakura-pink text-text-white shadow-lg">
//         <h1 className="text-3xl font-bold">Nihongo Kurabu</h1>
//       </header>
//       <main className="flex flex-col items-center justify-center text-center mt-20">
//         <h2 className="text-5xl font-extrabold mb-4">
//           Selamat Datang di Nihongo Kurabu
//         </h2>
//         <p className="text-lg mb-8">
//           Jelajahi keindahan bahasa dan budaya Jepang bersama kami!
//         </p>
//         <a
//           href="#activities"
//           className="px-6 py-3 bg-white text-mountain-dark font-medium rounded-full hover:bg-sakura-pink hover:text-text-black transition"
//         >
//           Lihat Aktivitas Kami
//         </a>
//       </main>
//       <footer className="absolute bottom-0 w-full text-center py-4 bg-mountain-dark text-white">
//         <p>© 2024 Nihongo Kurabu. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;

import React from "react";

const Home: React.FC = () => {
  return (
    <div className="scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full p-6 bg-sakura-pink text-text-black shadow-lg z-10">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Nihongo Kurabu</h1>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#hero" className="hover:text-mountain-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-mountain-dark">
                  Aktivitas
                </a>
              </li>
              <li>
                <a href="#join" className="hover:text-mountain-dark">
                  Bergabung
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center bg-tosca-green text-white px-4"
      >
        <h2 className="text-5xl font-extrabold mb-4">
          Selamat Datang di Nihongo Kurabu
        </h2>
        <p className="text-lg mb-8 max-w-xl">
          Jelajahi keindahan bahasa dan budaya Jepang bersama kami! Bergabunglah
          untuk belajar, berbagi, dan mengalami pengalaman unik.
        </p>
        <a
          href="#activities"
          className="px-6 py-3 bg-white text-mountain-dark font-medium rounded-full hover:bg-sakura-pink hover:text-text-black transition"
        >
          Lihat Aktivitas Kami
        </a>
      </section>

      {/* Upcoming Events */}
      <section
        id="activities"
        className="min-h-screen flex flex-col items-center justify-center bg-white text-text-black px-6 lg:px-16"
      >
        <h3 className="text-4xl font-bold text-center mb-8 text-mountain-dark">
          Aktivitas Mendatang
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-sakura-pink rounded-lg shadow-md p-6">
            <h4 className="text-2xl font-bold">Workshop Kaligrafi</h4>
            <p className="mt-2 text-sm">
              Tanggal: 15 Desember 2024 | Lokasi: Aula SMAN 3 Bukittinggi
            </p>
            <p className="mt-4 text-sm">
              Pelajari seni menulis huruf Jepang dengan instruktur berpengalaman.
            </p>
          </div>
          <div className="bg-sakura-pink rounded-lg shadow-md p-6">
            <h4 className="text-2xl font-bold">Festival Budaya</h4>
            <p className="mt-2 text-sm">
              Tanggal: 20 Januari 2025 | Lokasi: Lapangan Sekolah
            </p>
            <p className="mt-4 text-sm">
              Nikmati makanan Jepang, cosplay, dan pertunjukan seni.
            </p>
          </div>
          <div className="bg-sakura-pink rounded-lg shadow-md p-6">
            <h4 className="text-2xl font-bold">Kelas Bahasa Jepang</h4>
            <p className="mt-2 text-sm">
              Tanggal: 25 Februari 2025 | Lokasi: Ruang 103
            </p>
            <p className="mt-4 text-sm">
              Tingkatkan kemampuan berbicara Jepang dengan guru native.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section
        id="join"
        className="min-h-screen flex flex-col items-center justify-center bg-mountain-dark text-white px-6 lg:px-16 text-center"
      >
        <h3 className="text-4xl font-bold mb-8">Bergabung dengan Kami</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Jadi bagian dari komunitas Nihongo Kurabu dan eksplor keindahan bahasa
          serta budaya Jepang! Isi form di bawah ini untuk mendaftar.
        </p>
        <a
          href="/join"
          className="px-8 py-3 bg-sakura-pink text-text-black font-medium rounded-full hover:bg-white hover:text-mountain-dark transition"
        >
          Daftar Sekarang
        </a>
      </section>
    </div>
  );
};

export default Home;
