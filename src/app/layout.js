import { Noto_Serif_SC } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const noto = Noto_Serif_SC({ weight: '600', subsets: ['latin'] })

export const metadata = {
  title: '上海亿云 - 高级全屋定制 - 企业官网',
  description: '亿云高级定制，始于2003年，专注于提供卓越的全屋定制解决方案，包括衣柜、橱柜、书柜等，精选进口及国产高级板材，融合传统工艺与现代设计。致力于以个性化服务和精湛工艺，为您打造既实用又具有美学价值的家居空间，让您的生活空间焕发独特魅力。',
  keywords: ['全屋定制', '高级全屋定制', '橱柜定制', '衣柜定制', '衣帽间定制', '门类定制', '亿云建材', '亿云全屋定制'],
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      'baidu-site-verification': 'codeva-YBorFpfRRX',
    },
  },
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
