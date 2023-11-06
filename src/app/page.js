import Image from 'next/image'
import Navbar from '../components/Navbar'
import ImageItem from '../components/ImageItem'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <ImageItem
          src="/image/cloakroom.png"
          alt="cloakroom"
          text="步入式衣帽间方案"
          buttonText="即刻探索"
        />
        <ImageItem
          src="/image/cupboard2.png"
          alt="cupboard"
          text="橱柜定制案例"
          buttonText="查看更多"
        />
        <ImageItem
          src="/image/cabinet.png"
          alt="cabinet"
          text="设计师装饰柜系列"
          buttonText="即刻探索"
        />
        <ImageItem
          src="/image/cupboard.png"
          alt="moreProduct"
          text="更多案例鉴赏"
          buttonText="点击查看"
        />
      </div>
      <div>footer</div>
    </main>
  )
}
