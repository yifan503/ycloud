import { Noto_Serif_SC } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const noto = Noto_Serif_SC({ weight: '600', subsets: ['latin'] })

export const metadata = {
  title: '上海亿云高级全屋定制',
  description: '为您提供最高端的体验',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={noto.className}>
        <Navbar />
        <main>
          <div className='background'>
            {/* <div className="content"> */}
            {children}
            {/* </div> */}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
