'use client'

import Link from "next/link";
import styles from './cabinet.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Cabinet() {

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
                    <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cabinet_detail.jpg?imageslim' alt='cabinet' className={styles.head_img} />
                    <div className={styles.overlay}>
                        <h1 className={styles.title}>柜体定制</h1>
                        <p className={styles.intro}>有条不紊、抛却繁杂是所有人都向往的井然有序的生活。</p>
                        <p className={styles.intro}>意式储物柜将传统杂物储藏空间，置于日常生活中更加触手可及的地方管理储物空间秩序。</p>
                        <p className={styles.intro_phone}>有条不紊、抛却繁杂是所有人都向往的井然有序的生活。意式储物柜将传统杂物储藏空间，置于日常生活中更加触手可及的地方管理储物空间秩序。</p>
                    </div>
                    <div className={styles.down_arrow}>
                        <svg t="1725106748909" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32876" width="64" height="64"><path d="M818.7648 330.1888a38.4 38.4 0 0 1 54.8352 53.6064l-2.7648 2.816L512 717.8752 153.1648 386.5856A38.4 38.4 0 0 1 202.2144 327.68l3.0208 2.5344L512 613.3248l306.7648-283.136z" fill="#cdcdcd" p-id="32877"></path></svg>
                    </div>
                </div>
                <div className={styles.intro_text_container}>
                    <h2 className={styles.sub_title}>橱柜</h2>
                    <div className={styles.intro_text}>厨房作为生活的核心部分，亿云定制在审美性、功能性，融入室内装饰的选材方面，都做出了细致的考量，使功能和空间相互作用，提高空间利用率。</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.anim_container}>
                        <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cupboard3.jpg?imageslim' alt='wardrobes' className={styles.img} />
                    </div>
                    <div className={styles.anim_container_2}>
                        <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cupboard4.jpg?imageslim' alt='wardrobes' className={styles.img} />
                    </div>
                    {/* <div className={styles.anim_container}>
                        <img src='/image/cabinet4.jpg' alt='wardrobes' className={styles.img} />
                    </div> */}
                    {/* <img src='/image/cupboard4.jpg' alt='wardrobes' className={styles.img} />
                    <img src='/image/cupboard5.png' alt='wardrobes' className={styles.img} /> */}
                    <div className={styles.anim_cupboard}>
                        <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cupboard5.jpg?imageslim' alt='wardrobes' className={styles.img} />
                    </div>
                </div>
                <div className={styles.row_phone}>
                    <Slider {...settings}>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cupboard3.jpg?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cupboard4.jpg?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cupboard5.jpg?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                    </Slider>
                </div>
                <div className={styles.intro_text_container}>
                    <h2 className={styles.sub_title}>酒柜、装饰柜</h2>
                    <div className={styles.intro_text}>低调内敛的风格和大量精致的细节使意式成为最受欢迎的设计之一。</div>
                    <div className={styles.intro_text} > 通过建设与居所空间融为一体的方式，利用模块化的组件和材料创造无限自由性及可能性。</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.anim_gradevin}>
                        <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cabinet3.jpg?imageslim' alt='wardrobes' className={styles.img} />
                    </div>
                    <div className={styles.anim_gradevin}>
                        <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cabinet4.jpg?imageslim' alt='wardrobes' className={styles.img} />
                    </div>

                </div>
                <div className={styles.row}>
                    <div className={styles.anim_gradevin}>
                        <img src='http://cdn.yiyunjiancai.com/pages/cabinet/gradevin.jpg?imageslim' alt='wardrobes' className={styles.img} />
                    </div>
                    <div className={styles.anim_gradevin}>
                        <img src='http://cdn.yiyunjiancai.com/pages/cabinet/gradevin2.jpg?imageslim' alt='wardrobes' className={styles.img} />
                    </div>
                </div>
                <div className={styles.row_phone}>
                    <Slider {...settings}>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cabinet3.jpg?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cabinet4.jpg?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/cabinet/gradevin.jpg?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/cabinet/gradevin2.jpg?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                    </Slider>
                </div>
                <div className={styles.intro_text_container}>
                    <h2 className={styles.sub_title}>卫浴柜</h2>
                    <div className={styles.intro_text}>由亿云定制的卫浴柜内部空间经过合理规划，开放式置物架与隐藏式抽屉相结合，使得各类洗漱用品、毛巾和清洁工具都能有序存放，便于取用。</div>
                </div>
                <div className={styles.row}>
                    <div className={styles.anim_gradevin}>
                        <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cabinet5.jpg?imageslim' alt='wardrobes' className={styles.img} />
                    </div>
                    <div className={styles.anim_gradevin}>
                        <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cabinet6.jpg?imageslim' alt='wardrobes' className={styles.img} />
                    </div>
                </div>
                <div className={styles.row_phone}>
                    <Slider {...settings}>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cabinet5.jpg?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/cabinet/cabinet6.jpg?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                    </Slider>
                </div>


            </div>
        </>
    )
}