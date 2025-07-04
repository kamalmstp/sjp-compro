// components/MainNav.tsx
"use client"; // <<< INI PENTING! Tandai sebagai Client Component

import Link from "next/link";
import { useEffect, useState } from "react";

const MainNav = () => {
  const [activeSection, setActiveSection] = useState("beranda"); // State untuk melacak section aktif
  const navItems = [
    { href: "#beranda", label: "Beranda" },
    { href: "#tentang", label: "Tentang Kami" },
    { href: "#layanan", label: "Layanan" },
    { href: "#kontak", label: "Kontak" },
  ];

  useEffect(() => {
    // Inisialisasi Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, // Mengamati di dalam viewport browser
        rootMargin: "-50% 0px -50% 0px", // Ini akan membuat active section berubah di tengah viewport
        threshold: 0, // Mengamati segera setelah elemen masuk atau keluar
      }
    );

    // Amati setiap section yang memiliki ID yang sesuai dengan navItems
    navItems.forEach((item) => {
      const section = document.getElementById(item.href.substring(1)); // Dapatkan ID dari href
      if (section) {
        observer.observe(section);
      }
    });

    // Bersihkan observer saat komponen di-unmount
    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []); // [] agar effect hanya berjalan sekali saat mount

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`
            text-gray-700 hover:text-red-600 transition-colors font-medium
            ${activeSection === item.href.substring(1) 
               ? "text-red-600 font-bold border-b-2 border-red-600" 
               : ""
            }
          `}
          // Optional: Smooth scroll saat klik navigasi
          onClick={(e) => {
            e.preventDefault();
            const targetId = item.href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop - 80, // Sesuaikan offset jika ada fixed header
                behavior: "smooth",
              });
            }
          }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;