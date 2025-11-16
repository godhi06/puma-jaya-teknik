'use client'
import { useState } from 'react'
import Slider from 'react-slick'
import { 
  FaWhatsapp, FaTools, FaClock, FaShieldAlt,
  FaMoneyBillWave, FaLaptop, FaComments, 
  FaSnowflake, FaWind, FaBoxOpen, FaBuilding, FaCogs, FaThermometerHalf,
  FaWrench, FaFan, FaTint, FaPlug, FaRecycle 
} from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const images = ['/images/p1.jpg','/images/p2.jpg','/images/p3.jpg']

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  }

  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const whyChooseUs = [
    { icon: <FaTools className="text-5xl text-blue-600 mb-4 mx-auto" />, title: 'Teknisi Berpengalaman', desc: 'Lebih dari 10 tahun menangani semua tipe AC.' },
    { icon: <FaClock className="text-5xl text-blue-600 mb-4 mx-auto" />, title: 'Cepat & Tepat', desc: 'Servis di hari yang sama tanpa menunggu lama.' },
    { icon: <FaShieldAlt className="text-5xl text-blue-600 mb-4 mx-auto" />, title: 'Garansi Kerja', desc: 'Pekerjaan dijamin 100% puas atau kami perbaiki.' },
    { icon: <FaMoneyBillWave className="text-5xl text-blue-600 mb-4 mx-auto" />, title: 'Harga Transparan', desc: 'Tanpa biaya tersembunyi, langsung jelas di awal.' },
    { icon: <FaLaptop className="text-5xl text-blue-600 mb-4 mx-auto" />, title: 'Peralatan Modern', desc: 'Menggunakan tools dan freon ramah lingkungan.' },
    { icon: <FaComments className="text-5xl text-blue-600 mb-4 mx-auto" />, title: 'Konsultasi Gratis', desc: 'Cek kondisi AC & estimasi biaya tanpa biaya.' }
  ]

  const jenisService = [
    { icon: <FaWrench size={40} className="text-blue-500"/>, name: 'Servis & Perbaikan AC' },
    { icon: <FaFan size={40} className="text-blue-500"/>, name: 'Bongkar Pasang AC' },
    { icon: <FaTint size={40} className="text-blue-500"/>, name: 'Isi Freon AC' },
    { icon: <FaPlug size={40} className="text-blue-500"/>, name: 'Instalasi AC Baru' },
    { icon: <FaRecycle size={40} className="text-blue-500"/>, name: 'Jual Beli AC Bekas' }
  ]

  return (
    <div className="relative w-full overflow-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-[9999] bg-black/40 backdrop-blur-md text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-3xl md:text-4xl text-white">Puma Jaya Teknik</h1>
          <div className="hidden md:flex gap-8 text-lg md:text-xl">
            <button onClick={() => handleScroll('layanan')} className="hover:text-amber-400 transition">Layanan</button>
            <button onClick={() => handleScroll('jenisac')} className="hover:text-amber-400 transition">Jenis AC</button>
            <button onClick={() => handleScroll('jenisservice')} className="hover:text-amber-400 transition">Jenis Layanan</button>
            <button onClick={() => handleScroll('tentang')} className="hover:text-amber-400 transition">Tentang Kami</button>
            <a href="#!" onClick={() => window.open('https://wa.me/6281295843474', '_blank')} className="hover:text-amber-400 transition">
              Hubungi
            </a>
          </div>
          <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md text-white flex flex-col items-center gap-6 py-6 text-lg">
            <button onClick={() => { handleScroll('layanan'); setMenuOpen(false)}} className="hover:text-amber-400 transition">Layanan</button>
            <button onClick={() => { handleScroll('jenisac'); setMenuOpen(false)}} className="hover:text-amber-400 transition">Jenis AC</button>
            <button onClick={() => { handleScroll('jenisservice'); setMenuOpen(false)}} className="hover:text-amber-400 transition">Jenis Layanan</button>
            <button onClick={() => { handleScroll('tentang'); setMenuOpen(false)}} className="hover:text-amber-400 transition">Tentang Kami</button>
            <a 
              href="#!" 
              className="hover:text-amber-400 transition" 
              onClick={() => {
                window.open('https://wa.me/6285123337635', '_blank');
                setMenuOpen(false);
              }}
            >
              Hubungi
            </a>
          </div>
        )}
      </nav>

      {/* HERO SLIDER */}
      <div className="relative h-screen w-full">
        <Slider {...settings} className="absolute inset-0 h-full w-full">
          {images.map((src, idx) => (
            <div key={idx}>
              <img src={src} alt={`AC Service ${idx + 1}`} className="w-full h-screen object-cover"/>
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 drop-shadow-2xl text-amber-300">
            Jasa Service AC Profesional
          </h1>
          <p className="text-2xl md:text-4xl mb-8 drop-shadow-lg max-w-3xl text-white leading-relaxed">
            Penyedia layanan bongkar pasang AC, isi freon, reparasi, jual beli AC bekas, dan servis berbagai jenis AC. Berpengalaman lebih dari 10 tahun.
          </p>
          <button onClick={() => handleScroll('layanan')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xl md:text-2xl rounded-lg shadow-lg transition transform hover:scale-105">
            Lihat Layanan
          </button>
        </div>
      </div>

      {/* KENAPA MEMILIH KAMI */}
      <section id="layanan" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-16 text-blue-900">Kenapa Memilih Kami?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-2 text-center">
                {item.icon}
                <h3 className="text-3xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-xl text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
          {/* CTA kecil di bawah */}
          <div className="mt-12">
            <a href="https://wa.me/6285123337635" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 text-xl rounded-lg shadow-lg transition transform hover:scale-105">
              Hubungi Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* JENIS AC */}
      <section id="jenisac" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-16 text-blue-900">Jenis AC yang Kami Tangani</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[ 
              { icon: <FaSnowflake size={40} className="text-blue-500"/>, name: 'AC Split' },
              { icon: <FaWind size={40} className="text-blue-500"/>, name: 'Split Duct' },
              { icon: <FaBoxOpen size={40} className="text-blue-500"/>, name: 'AC Kaset' },
              { icon: <FaBuilding size={40} className="text-blue-500"/>, name: 'AC Standing' },
              { icon: <FaCogs size={40} className="text-blue-500"/>, name: 'VRV / VRF' },
              { icon: <FaThermometerHalf size={40} className="text-blue-500"/>, name: 'Cold Room (Ruangan Pendingin)' },
            ].map((ac, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2">
                <div className="mb-4">{ac.icon}</div>
                <h3 className="text-3xl font-semibold text-blue-900">{ac.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JENIS LAYANAN AC */}
      <section id="jenisservice" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-16 text-blue-900">Jenis Layanan AC</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {jenisService.map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-3xl font-semibold text-blue-900">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENTANG KAMI */}
      <section id="tentang" className="py-20 md:py-28 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-blue-900">Tentang Kami</h2>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed">
            Puma Jaya Teknik adalah penyedia jasa resmi servis AC yang telah membantu
            ratusan rumah dan kantor. Kami mengutamakan kualitas, ketepatan waktu,
            dan pelayanan ramah. Melayani bongkar pasang AC, isi freon, perbaikan,
            hingga jual beli AC bekas dengan kualitas terjamin.
          </p>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/6281295843474?text=Halo%20Puma%20Jaya%20Teknik,%20saya%20ingin%20bertanya%20tentang%20layanan%20AC."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  )
}
