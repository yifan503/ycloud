'use client'


import styles from './door.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Door() {

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
                    <img src='http://cdn.yiyunjiancai.com/pages/door/door.jpg?imageslim' alt='door' className={styles.head_img} />
                    <div className={styles.overlay}>
                        <h1 className={styles.title}>定制门系列</h1>
                        <p className={styles.intro}>从单开门到双开门，再到灵活的移门和便捷的折叠门，</p>
                        <p className={styles.intro}>每一款都凝聚着匠心独运的设计，完美融入您的家居空间，满足您对美学与实用性的双重追求。</p>
                        <p className={styles.intro_phone}>
                            从单开门到双开门，再到灵活的移门和便捷的折叠门，每一款都凝聚着匠心独运的设计，完美融入您的家居空间，满足您对美学与实用性的双重追求。
                        </p>
                    </div>
                    <div className={styles.down_arrow}>
                        <svg t="1725106748909" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32876" width="64" height="64"><path d="M818.7648 330.1888a38.4 38.4 0 0 1 54.8352 53.6064l-2.7648 2.816L512 717.8752 153.1648 386.5856A38.4 38.4 0 0 1 202.2144 327.68l3.0208 2.5344L512 613.3248l306.7648-283.136z" fill="#cdcdcd" p-id="32877"></path></svg>
                    </div>
                </div>
                <div className={styles.title2}>
                    <h2 className={styles.subtitle}>移门、折叠门</h2>
                </div>
                <div className={styles.row}>
                    <div className={styles.anim_container}>
                        <img src='http://cdn.yiyunjiancai.com/pages/door/slidingDoor.png?imageslim' alt='door' className={styles.slidingDoor} />
                    </div>
                    <div className={styles.anim_container}>
                        <img src='http://cdn.yiyunjiancai.com/pages/door/slidingDoor2.png?imageslim' alt='door' className={styles.slidingDoor} />
                    </div>
                    <div className={styles.anim_container}>
                        <img src='http://cdn.yiyunjiancai.com/pages/door/slidingDoor3.png?imageslim' alt='door' className={styles.slidingDoor} />
                    </div>
                    {/* <img src='/image/slidingDoor2.png' alt='door' className={styles.slidingDoor} />
                    <img src='/image/slidingDoor3.png' alt='door' className={styles.slidingDoor} /> */}
                </div>
                <div className={styles.row_phone}>
                    <Slider {...settings}>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/door/slidingDoor.png?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/door/slidingDoor2.png?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/door/slidingDoor3.png?imageslim' alt='wardrobes' className={styles.img} />
                        </div>
                    </Slider>
                </div>
                <div className={styles.title2}>
                    <h2 className={styles.subtitle}>单开门</h2>
                </div>
                <div className={styles.row}>
                    <img src='http://cdn.yiyunjiancai.com/pages/door/singleDoor.png?imageslim' alt='door' className={styles.singleDoor} />
                    <img src='http://cdn.yiyunjiancai.com/pages/door/singleDoor2.png?imageslim' alt='door' className={styles.singleDoor2} />

                    <img src='http://cdn.yiyunjiancai.com/pages/door/door2.jpg?imageslim' alt='door' className={styles.head_img2} />
                </div>
                <div className={styles.row_phone}>
                    <Slider {...settings}>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/door/singleDoor.png?imageslim' alt='wardrobes' className={styles.img_2} />
                        </div>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/door/singleDoor2.png?imageslim' alt='wardrobes' className={styles.img_2} />
                        </div>
                        <div className={styles.anim_container}>
                            <img src='http://cdn.yiyunjiancai.com/pages/door/door2.jpg?imageslim' alt='wardrobes' className={styles.img_2} />
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}