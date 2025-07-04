import PartnershipCallToAction from "@/components/PartnershipCallToAction";
import LogoCarousel from "@/components/LogoCarousel";
import MainNav from "@/components/MainNav";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Truck,
  Ship,
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Package,
  Globe,
  Leaf,
  Target,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SaranaPerintisJaya() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Saja */}
            <Image
              src="/logo-160.png"
              alt="Logo CV Sarana Perintis Jaya"
              width={160}
              height={48}
              className="object-contain"
              priority
            />
      
            {/* Menu Navigasi */}
            <MainNav />
      
            {/* Tombol Aksi */}
            <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
              Hubungi Kami
              <Phone className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">🚛 Solusi Logistik Terpercaya</Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Layanan
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    {" "}
                    Logistik
                  </span>
                  <br />
                  Profesional
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  CV. Sarana Perintis Jaya melayani kebutuhan transportasi dan logistik Anda dengan layanan Door to
                  Door, Door to Port, Port to Door, dan Port to Port. Mitra Terpercaya Pengiriman Barang Perkebunan & Industri
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                >
                  Konsultasi Gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Lihat Layanan
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>Sampit, Kalimantan Tengah</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span>Layanan 24/7</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl blur-3xl opacity-20"></div>
              <Image
                src="/img/gudang3.jpg?height=600&width=800"
                alt="Truck Logistik CV. Sarana Perintis Jaya"
                width={800}
                height={600}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/img/kapal1.jpg?height=500&width=600"
                alt="Kantor CV. Sarana Perintis Jaya"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-600">10+</p>
                  <p className="text-sm text-gray-600">Tahun Pengalaman</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Tentang CV. Sarana Perintis Jaya</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  CV. Sarana Perintis Jaya adalah perusahaan logistik dan transport yang berpengalaman lebih dari 10
                  tahun melayani kebutuhan pengiriman barang di Kalimantan Tengah, khususnya di wilayah Sampit dan
                  sekitarnya.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600">
                  Kami melayani pengiriman kebutuhan dan hasil perkebunan sawit dengan standar kualitas
                  tinggi dan keamanan terjamin. Dengan armada yang lengkap dan tim profesional, kami siap melayani
                  berbagai kebutuhan logistik Anda.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Keamanan Terjamin</p>
                    <p className="text-sm text-gray-600">Asuransi penuh</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Tim Profesional</p>
                    <p className="text-sm text-gray-600">Berpengalaman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan logistik dan transport sesuai kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Door to Door</CardTitle>
                <CardDescription className="text-center">
                  Pengiriman langsung dari alamat pengirim ke alamat penerima
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Door to Port</CardTitle>
                <CardDescription className="text-center">
                  Pengiriman dari alamat pengirim langsung ke pelabuhan tujuan
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ship className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Port to Door</CardTitle>
                <CardDescription className="text-center">
                  Pengambilan barang dari pelabuhan ke alamat penerima
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Port to Port</CardTitle>
                <CardDescription className="text-center">
                  Pengiriman antar pelabuhan dan kerjasama Perusahaan Pelayaran profesional
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Specialization */}
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Leaf className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Spesialisasi Logistik & Transportasi</h3>
                </div>
                <p className="text-lg opacity-90 mb-6">
                  Kami berpengalaman dalam menyediakan layanan pengiriman barang untuk berbagai sektor industri dan
                  perkebunan, dengan standar kualitas tinggi dan penanganan profesional.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Penanganan khusus untuk berbagai jenis barang</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Armada lengkap untuk kebutuhan industri & perkebunan</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Pengalaman lebih dari 10 tahun di bidang logistik</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="/img/truck6.jpg?height=600&width=1000"
                  alt="Ilustrasi Layanan Logistik"
                  width={1000}
                  height={600}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Mengapa Memilih Kami?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Keunggulan yang membuat CV. Sarana Perintis Jaya menjadi pilihan terbaik untuk kebutuhan logistik Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pengalaman Terpercaya</h3>
                <p className="text-gray-600">
                  Lebih dari 10 tahun melayani kebutuhan logistik di Kalimantan Tengah dengan rekam jejak yang excellent
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tepat Waktu</h3>
                <p className="text-gray-600">
                  Komitmen tinggi terhadap ketepatan waktu pengiriman dengan sistem tracking yang akurat
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Keamanan Terjamin</h3>
                <p className="text-gray-600">
                  Barang Anda diasuransikan penuh dengan penanganan yang aman dan profesional
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Mitra Terpercaya Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dipercaya oleh perusahaan-perusahaan terkemuka di industri kelapa sawit dan logistik
            </p>
          </div>

          <LogoCarousel />

          <div className="text-center mt-12">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                <p className="text-gray-600">Mitra Perusahaan</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                <p className="text-gray-600">Pengiriman Berhasil</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">99.8%</div>
                <p className="text-gray-600">Tingkat Kepuasan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnershipCallToAction />

      {/* Testimonials Section */}
      
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Testimoni Klien</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dengarkan langsung dari klien-klien kami yang telah merasakan pelayanan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "CV. Sarana Perintis Jaya sangat membantu dalam pengiriman hasil panen sawit kami. Pelayanan door to
                  port mereka sangat efisien dan tepat waktu. Tim mereka sangat profesional dalam menangani produk
                  kami."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Budi Santoso"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Budi Santoso</p>
                    <p className="text-sm text-gray-600">Manager Operasional</p>
                    <p className="text-sm text-red-600 font-medium">PT Sawit Mas Perkebunan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Sudah 5 tahun kami menggunakan jasa CV. Sarana Perintis Jaya untuk distribusi produk kami. Tidak
                  pernah ada masalah dengan pengiriman, selalu aman dan tepat waktu. Sangat recommended!"
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Siti Rahayu"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Siti Rahayu</p>
                    <p className="text-sm text-gray-600">Direktur Logistik</p>
                    <p className="text-sm text-red-600 font-medium">CV Borneo Plantation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Pelayanan port to port mereka sangat memuaskan. Koordinasi dengan pelabuhan sangat baik dan tracking
                  pengiriman selalu update. Harga juga sangat kompetitif dibanding kompetitor lain."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Ahmad Fauzi"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Ahmad Fauzi</p>
                    <p className="text-sm text-gray-600">General Manager</p>
                    <p className="text-sm text-red-600 font-medium">PT Kalteng Prima</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Tim customer service mereka sangat responsif. Setiap pertanyaan dan keluhan ditangani dengan cepat.
                  Armada truck mereka juga selalu dalam kondisi prima untuk mengangkut hasil perkebunan kami."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Indra Wijaya"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Indra Wijaya</p>
                    <p className="text-sm text-gray-600">Kepala Divisi Ekspor</p>
                    <p className="text-sm text-red-600 font-medium">PT Sampit Jaya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "Pengalaman bekerja sama dengan CV. Sarana Perintis Jaya sangat memuaskan. Mereka memahami betul
                  karakteristik produk sawit dan cara penanganannya. Sangat profesional dan terpercaya."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Maria Dewi"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Maria Dewi</p>
                    <p className="text-sm text-gray-600">Supply Chain Manager</p>
                    <p className="text-sm text-red-600 font-medium">PT Kotawaringin Sejahtera</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Hubungi Kami</h2>
            <p className="text-xl text-gray-600">Siap melayani kebutuhan logistik dan transport Anda 24/7</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Alamat Kantor</h4>
                      <p className="text-gray-600">
                        Jl. M Hatta No 70 RT/RW 016/004
                        <br />
                        Sampit, Kotawaringin Timur
                        <br />
                        Kalimantan Tengah
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                      <p className="text-gray-600">
                        +62 811 5201 797 (Sampit)
                        <br />
                        +62 878 5132 3229 (Surabaya)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">
                        kurniawangungun4@gmail.com
                        <br />
                        danendracahya@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Jam Operasional</h4>
                      <p className="text-gray-600">
                        Senin - Jumat: 08:00 - 17:00
                        <br />
                        Sabtu: 08:00 - 12:00
                        <br />
                        Customer Serivice: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Perusahaan</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Nama perusahaan"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telepon</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+62 800 0000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Layanan yang Dibutuhkan</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>Pilih layanan</option>
                    <option>Door to Door</option>
                    <option>Door to Port</option>
                    <option>Port to Door</option>
                    <option>Port to Port</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Jelaskan kebutuhan logistik Anda..."
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 py-3">
                  Kirim Pesan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                 <Image
                   src="logo-160.png"
                   alt="Logo CV. SPJ"
                   width={160}
                   height={48}
                   className="object-contain"
                  />
              </div>
              <p className="text-gray-400">
                Solusi logistik dan transport terpercaya untuk kebutuhan bisnis Anda di Kalimantan Tengah.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Door to Door</li>
                <li>Door to Port</li>
                <li>Port to Door</li>
                <li>Port to Port</li>
                <li>Logistik Kelapa Sawit</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tentang Kami</li>
                <li>Layanan</li>
                <li>Karir</li>
                <li>Berita</li>
                <li>Kontak</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Sampit, Kalteng
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +62 811 5201 797 (Sampit)
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +62 878 5132 3229 (Surabaya)
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  kurniawangungun4@gmail.com
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  danendracahya@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} CV. Sarana Perintis Jaya. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
