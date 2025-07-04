// components/MainNav.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const MainNav = () => {
  const [activeSection, setActiveSection] = useState("beranda");
  const navItems = [
    { href: "#beranda", label: "Beranda" },
    { href: "#tentang", label: "Tentang Kami" },
    { href: "#layanan", label: "Layanan" },
    { href: "#kontak", label: "Kontak" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Cukup periksa apakah elemen sedang berinterseksi (terlihat)
          // rootMargin akan menentukan "area aktif" di tengah viewport
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", // Tetap gunakan ini untuk mendeteksi di tengah viewport
        threshold: 0, // Observer akan memicu saat elemen masuk/keluar dari rootMargin
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.href.substring(1));
      if (section) {
        observer.observe(section);
      } else {
        // Ini akan muncul di console.log jika section tidak ditemukan
        console.warn(`Section with ID '${item.href.substring(1)}' not found.`);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {/* Tambahkan elemen ini untuk debugging visual */}
      {/* Pastikan nav memiliki properti positioning seperti 'relative' agar absolute ini bekerja */}
      <div className="absolute top-0 right-0 p-2 bg-red-200 text-red-800 text-xs z-50">
        Active: {activeSection}
      </div>

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