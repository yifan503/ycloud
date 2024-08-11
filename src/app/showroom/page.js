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
                                <img src='/image/showroom_bar2.jpg' alt='showroom' className={styles.img} />
                            </div>
                        </Slider>
                    </div>

                    <div className={styles.overlay}>
                        <p>走进我们的高端全屋定制展厅，探索意大利进口家具的精致与定制家居的无限可能。这里，每一件家具、每一个定制柜体和门都诉说着对细节的执着追求。我们展示的不仅是样例，而是一种专属于您的舒适与奢华。我们的专业团队期待与您携手，打造一个既实用又具有个性的家。</p>
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