// components/LogoCarousel.tsx
"use client"; // Penting: Ini menandai komponen sebagai Client Component

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import gaya untuk autoplay

// Data Dummy untuk Logo Mitra (Anda bisa tambahkan/ganti dengan data asli)
const partnerLogos = [
  { src: '/placeholder.svg?height=80&width=120', alt: 'PT Agro Nusantara Indonesia', name: 'PT Agro Nusantara Indonesia' },
  { src: '/placeholder.svg?height=80&width=120', alt: 'PT Nusatrans Anugerah Makmur', name: 'PT Nusatrans Anugerah Makmur' },
  { src: '/placeholder.svg?height=80&width=120', alt: 'CV Agro Sepakat Jaya', name: 'CV Agro Sepakat Jaya' },
  { src: '/placeholder.svg?height=80&width=120', alt: 'PT Anugerah Jelajah Logistic Indonesia', name: 'PT Anugerah Jelajah Logistic Indonesia' },
  { src: '/placeholder.svg?height=80&width=120', alt: 'PT Yustiko Jaya Nusantara', name: 'PT Yustiko Jaya Nusantara' },
  { src: '/placeholder.svg?height=80&width=120', alt: 'PT Dwi Mitra Adhiusaha', name: 'PT Dwi Mitra Adhiusaha' },
  { src: '/placeholder.svg?height=80&width=120', alt: 'PT Dehael Nusantara Logistik', name: 'PT Dehael Nusantara Logistik' },
  { src: '/placeholder.svg?height=80&width=120', alt: 'PT Binasawit Abadipratama', name: 'PT Binasawit Abadipratama' },
  { src: '/placeholder.svg?height=80&width=120', alt: 'PT Trans Utama Indo Sejahtera', name: 'PT Trans Utama Indo Sejahtera' },
  { src: '/placeholder.svg?height=80&width=120', alt: 'PT Mesti Tumbuh Bersama', name: 'PT Mesti Tumbuh Bersama' },
];

const LogoCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]} // Aktifkan modul autoplay, navigasi, dan pagination
      spaceBetween={30} // Jarak antar slide
      slidesPerView={2} // Default: 2 logo per slide di layar kecil
      autoplay={{
        delay: 2500, // Durasi antar slide (ms)
        disableOnInteraction: false, // Lanjutkan autoplay setelah interaksi user
      }}
      loop={true} // Membuat slider berputar terus menerus
      navigation={true} // Tampilkan tombol navigasi (panah kiri/kanan)
      pagination={{ clickable: true }} // Tampilkan indikator halaman (dot di bawah), bisa diklik
      breakpoints={{
        // Pengaturan responsif
        640: {
          slidesPerView: 3, // 3 logo di layar >= 640px
        },
        768: {
          slidesPerView: 4, // 4 logo di layar >= 768px
        },
        1024: {
          slidesPerView: 6, // 6 logo di layar >= 1024px
        },
      }}
      className="partner-logo-swiper" // Anda bisa menambahkan custom CSS di globals.css jika diperlukan
    >
      {partnerLogos.map((logo, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={80}
              className="mx-auto grayscale hover:grayscale-0 transition-all"
            />
            <p className="text-center text-sm text-gray-600 mt-2 font-medium">{logo.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LogoCarousel;