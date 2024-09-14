'use client'

import { useEffect } from 'react';
import ImageItem from '../components/ImageItem'
import ReactFullpage from '@fullpage/react-fullpage';
import styles from './index.module.css';

export default function Home() {

  useEffect(() => {
    const hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?9b109b72cec97c5e21f0c4ff332da86b";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  }, []);

  const Fullpage = () => (
    <ReactFullpage
      //fullpage options
      responsiveWidth={600}
      licenseKey={'gplv3-license'}
      scrollingSpeed={700} /* Options here */
      credits={{ enabled: true, label: '', position: 'right' }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <ImageItem
                src="https://cdn.yiyunjiancai.com/pages/index/cabinet.jpg?imageslim"
                alt="cabinet"
                text="定制柜系列"
                buttonText="即刻探索"
                page='/cabinet'
              />
            </div>
            <div className="section">
              <ImageItem
                src="https://cdn.yiyunjiancai.com/pages/index/closet.jpg?imageslim"
                alt="cloakroom"
                text="步入式衣帽间方案"
                buttonText="即刻探索"
                page='/closet'
              />
            </div>
            <div className="section">
              <ImageItem
                src="https://cdn.yiyunjiancai.com/pages/index/cabinet2.jpg?imageslim"
                alt="cupboard"
                text="卫浴柜定制案例"
                buttonText="查看更多"
                page='/cabinet'
              />
            </div>
            <div className="section">
              <ImageItem
                src="https://cdn.yiyunjiancai.com/pages/index/cupboard2.jpg?imageslim"
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
      <div className={styles.index_container}>
        <Fullpage />
      </div>
      <div className={styles.index_container_phone}>
        <ImageItem
          src="https://cdn.yiyunjiancai.com/pages/index/cabinet.jpg?imageslim"
          alt="cabinet"
          text="定制柜系列"
          buttonText="即刻探索"
          page='/cabinet'
        />
        <ImageItem
          src="https://cdn.yiyunjiancai.com/pages/index/closet.jpg?imageslim"
          alt="cloakroom"
          text="步入式衣帽间方案"
          buttonText="即刻探索"
          page='/closet'
        />
        <ImageItem
          src="https://cdn.yiyunjiancai.com/pages/index/cabinet2.jpg?imageslim"
          alt="cupboard"
          text="卫浴柜定制案例"
          buttonText="查看更多"
          page='/cabinet'
        />
        <ImageItem
          src="https://cdn.yiyunjiancai.com/pages/index/cupboard2_phone.jpg?imageslim"
          alt="moreProduct"
          text="更多案例鉴赏"
          buttonText="点击查看"
          page='/door'
        />
      </div>
    </>
  )
}
