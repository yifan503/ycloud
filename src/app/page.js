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
                src="/image/closet.png"
                alt="cloakroom"
                text="步入式衣帽间方案"
                buttonText="即刻探索"
                page='/closet'
              />
            </div>
            <div className="section">
              <ImageItem
                src="/image/cupboard2.png"
                alt="cupboard"
                text="橱柜定制案例"
                buttonText="查看更多"
                page='/cabinet'
              />
            </div>
            <div className="section">
              <ImageItem
                src="/image/cabinet.png"
                alt="cabinet"
                text="设计师装饰柜系列"
                buttonText="即刻探索"
                page='/cabinet'
              />
            </div>
            <div className="section">
              <ImageItem
                src="/image/more_case.png"
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
