'use client'

import ImageItem from '../components/ImageItem'
import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {

  const Fullpage = () => (
    <ReactFullpage
      //fullpage options
      licenseKey={'gplv3-license'}
      scrollingSpeed={700} /* Options here */
      credits={{ enabled: true, label: '', position: 'right' }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <ImageItem
                src="/image/cabinet.jpg"
                alt="cabinet"
                text="定制柜系列"
                buttonText="即刻探索"
                page='/cabinet'
              />
            </div>
            <div className="section">
              <ImageItem
                src="/image/closet.jpg"
                alt="cloakroom"
                text="步入式衣帽间方案"
                buttonText="即刻探索"
                page='/closet'
              />
            </div>
            <div className="section">
              <ImageItem
                src="/image/cabinet2.jpg"
                alt="cupboard"
                text="卫浴柜定制案例"
                buttonText="查看更多"
                page='/cabinet'
              />
            </div>
            <div className="section">
              <ImageItem
                src="/image/cupboard2.jpg"
                alt="moreProduct"
                text="更多案例鉴赏"
                buttonText="点击查看"
                page='/door'
              />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
  return (
    <>

      <Fullpage />
    </>
  )
}
