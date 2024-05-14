import Navbar from '../components/Navbar'
import ImageItem from '../components/ImageItem'
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className="container">
        <ImageItem
          src="/image/closet.png"
          alt="cloakroom"
          text="步入式衣帽间方案"
          buttonText="即刻探索"
          page='/closet'
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
          src="/image/more_case.png"
          alt="moreProduct"
          text="更多案例鉴赏"
          buttonText="点击查看"
        />
      </div>
    </>
  )
}
