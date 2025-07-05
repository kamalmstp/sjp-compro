// components/PartnershipCallToAction.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const PartnershipCallToAction = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/img/truck5.jpg"
          alt="Ajakan Bermitra dengan CV. Sarana Perintis Jaya"
          layout="fill"
          objectFit="cover"
          className="opacity-60 blur-sm"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Apakah Anda tertarik dan ingin{" "}
          <span className="text-orange-500">bermitra dengan kami</span>?
        </h2>
        <p className="text-lg mb-8">
          Pelayanan kami selalu tersedia untuk menjawab semua pertanyaan terkait pelayanan dan kerja sama
          yang akan kami tawarkan kepada client dan calon client perusahaan kami. Silahkan hubungi kontak
          service kami di bawah ini, untuk info lebih lanjut.
        </p>
        <Button size="lg" asChild className="bg-orange-600 hover:bg-orange-700">
          <Link href="https://wa.me/628115201797" target="_blank" rel="noopener noreferrer">
            Hubungi Kami
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default PartnershipCallToAction;