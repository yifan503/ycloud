'use client'

import Link from "next/link";
import styles from './closet.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Closet() {

    const settings = {
        dots: true,
        dotsClass: styles.slick_dots,
        arrows: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.img_container}>
                    <img src='http://cdn.yiyunjiancai.com/pages/closet/door_detail.jpg?imageslim' alt='door' className={styles.head_img} />
                    <div className={styles.overlay}>
                        <h1 className={styles.title}>衣帽间定制</h1>
                        <p className={styles.intro}>衣帽间的精致除了科学合理的收纳分区布局外，</p>
                        <p className={styles.intro}>结构、美感与灯光也是极为重要的成分。</p>
                        <p className={styles.intro}>高定衣帽间从居住者的生活中汲取灵感，匹配居住者的高级审美和品味生活需求。</p>
                        <p className={styles.intro_phone}>衣帽间的精致除了科学合理的收纳分区布局外，结构、美感与灯光也是极为重要的成分。高定衣帽间从居住者的生活中汲取灵感，匹配居住者的高级审美和品味生活需求。</p>
                    </div>
                    <div className={styles.down_arrow}>
                        <svg t="1725106748909" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32876" width="64" height="64"><path d="M818.7648 330.1888a38.4 38.4 0 0 1 54.8352 53.6064l-2.7648 2.816L512 717.8752 153.1648 386.5856A38.4 38.4 0 0 1 202.2144 327.68l3.0208 2.5344L512 613.3248l306.7648-283.136z" fill="#cdcdcd" p-id="32877"></path></svg>
                    </div>
                </div>
                <div className={styles.intro_text_container}>
                    <h2 className={styles.sub_title}>衣帽间案例精选</h2>
                    <div className={styles.intro_text}>造型简单却设计感十足，金属框架打造的产品也不会呆板，让居住的生活简单而又富有精致美感。</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.img_box}>
                        <img src='http://cdn.yiyunjiancai.com/pages/closet/wardrobes2.jpg?imageslim' alt='wardrobes' className={styles.img} />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.img_box}>
                        <img src='http://cdn.yiyunjiancai.com/pages/closet/wardrobes3.jpg?imageslim' alt='wardrobes' className={styles.img} />
                    </div>
                </div>
                <div className={styles.row} >
                    <div className={styles.img_box}>
                        <img src='http://cdn.yiyunjiancai.com/pages/closet/wardrobes.jpg?imageslim' alt='wardrobes' className={styles.img} />

                    </div>
                    {/* <img src='/image/wardrobes3.jpg' alt='wardrobes' className={styles.img_down} /> */}
                </div>
                <div className={styles.slider_container}>
                    <Slider {...settings}>
                        <div className={styles.img_box}>
                            <img src='http://cdn.yiyunjiancai.com/pages/closet/wardrobes2.jpg?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='http://cdn.yiyunjiancai.com/pages/closet/wardrobes3.jpg?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='http://cdn.yiyunjiancai.com/pages/closet/wardrobes.jpg?imageslim' alt='wardrobes' className={styles.img} />

                        </div>
                    </Slider>
                </div>

            </div>
        </>
    )
}