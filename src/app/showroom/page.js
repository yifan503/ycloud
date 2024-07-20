'use client'

import styles from './showroom.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ShowRoom() {

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
                <div className={styles.row}>
                    <div className={styles.slide_container} >
                        <Slider {...settings}>
                            <div >
                                <img src='/image/showroom_main.jpg' alt='showroom' className={styles.img} />
                            </div>
                            <div>
                                <img src='/image/showroom_main.jpg' alt='showroom' className={styles.img} />

                            </div>
                        </Slider>
                    </div>

                    <div className={styles.overlay}>
                        <span className={styles.text}>展厅地址：上海市闵行区吴中路1388号红星欧丽环球家居4楼D8025</span>
                    </div>
                </div>
                {/* <div className={styles.row_reverse}>
                    <img src='/image/showroom_statue.jpg' alt='showroom' className={styles.small_img} />
                </div> */}
            </div>
        </>
    )
}