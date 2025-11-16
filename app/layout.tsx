import './globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: 'Jasa Service AC Profesional',
  description: 'Servis AC cepat, terpercaya, dan berpengalaman',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-800">{children}</body>
    </html>
  )
}
