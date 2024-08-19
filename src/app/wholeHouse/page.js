'use client'


import styles from './wholeHouse.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick.css';
import Slider from "react-slick";

export default function WholeHouse() {

    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <svg className={className} style={{ ...style, display: 'block' }} onClick={onClick} t="1724065022701" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8989" width="200" height="200"><path d="M472.064 272.448l-399.232 399.232c-22.08 22.08-22.08 57.792 0 79.872 22.016 22.016 57.792 22.08 79.872 0L512 392.256l359.296 359.296c22.016 22.016 57.792 22.08 79.872 0 22.08-22.08 22.016-57.792 0-79.872L551.936 272.448C529.856 250.432 494.144 250.432 472.064 272.448z" fill="#e6e6e6" p-id="8990"></path></svg>
        )
    }

    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <svg className={className} style={{ ...style, display: 'block' }} onClick={onClick} t="1724065022701" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8989" width="200" height="200"><path d="M472.064 272.448l-399.232 399.232c-22.08 22.08-22.08 57.792 0 79.872 22.016 22.016 57.792 22.08 79.872 0L512 392.256l359.296 359.296c22.016 22.016 57.792 22.08 79.872 0 22.08-22.08 22.016-57.792 0-79.872L551.936 272.448C529.856 250.432 494.144 250.432 472.064 272.448z" fill="#e6e6e6" p-id="8990"></path></svg>
        )
    }



    const settings = {
        className: 'center-slider',
        centerMode: true,
        dots: true,
        dotsClass: styles.slick_dots,
        arrows: true,
        infinite: true,
        autoplay: true,
        centerPadding: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.row}>
                    <img src='/image/wholehouse.jpg' className={styles.head_img} alt='wholehouse' />
                    <div className={styles.head_text}>
                        <h1 className={styles.title}>全屋定制</h1>
                        <p className={styles.head_intro}>亿云高级定制，自2003年成立，专注于提供卓越的全屋定制解决方案，包括衣柜、橱柜、书柜等，精选进口及国产高级板材，融合传统工艺与现代设计。我们致力于以个性化服务和精湛工艺，为您打造既实用又具有美学价值的家居空间，让您的生活空间焕发独特魅力。</p>
                    </div>
                </div>
                <h2 className={styles.subtitle}>细节展示</h2>
                <div className={styles.row}>
                    <div className={styles.slide_container} >

                        <Slider {...settings}>
                            <div >
                                <img src='/image/product_detail.jpg' alt='detail' className={styles.img} />
                            </div>
                            <div>
                                <img src='/image/product_detail2.jpg' alt='detail' className={styles.img} />
                            </div>
                            <div>
                                <img src='/image/product_detail3.jpg' alt='detail' className={styles.img} />
                            </div>
                            <div>
                                <img src='/image/product_detail4.jpg' alt='detail' className={styles.img} />
                            </div>
                            <div>
                                <img src='/image/product_detail5.jpg' alt='detail' className={styles.img} />
                            </div>
                        </Slider>
                    </div>
                </div>
                <h2 className={styles.subtitle2}>板材介绍</h2>
                <p className={styles.intro}>进口板材有：意大利可丽芙(CLEAF)、意大利Tabu木皮、 德国丽特曼、德国科尔木皮、德国克诺斯邦、比利时UNILIN、奥地利爱格等</p>
                <div className={styles.row}>
                    <img src='/image/board.png' className={styles.board} alt='board' />
                </div>
                <p className={styles.intro}>国产合作品牌免漆色板</p>
                <div className={styles.row}>
                    <img src='/image/board_cn.png' className={styles.board_cn} alt='board' />
                </div>
                <h2 className={styles.subtitle2}>定制流程</h2>
                <div className={styles.flow}>
                    <div className={styles.unit}>
                        <img src='/image/designer.png' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >设计师对接</span>
                    </div>
                    <img src='/image/arrow.png' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='/image/price.png' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >确定方案及报价</span>
                    </div>
                    <img src='/image/arrow.png' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='/image/money.png' alt='img' className={styles.money} />
                        <span className={styles.icon_text} >首付款支付</span>
                    </div>
                    <img src='/image/arrow.png' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='/image/factory.png' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >工厂下单生产</span>
                    </div>
                    <img src='/image/arrow.png' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='/image/money.png' alt='img' className={styles.money} />
                        <span className={styles.icon_text} >支付尾款</span>
                    </div>
                    <img src='/image/arrow.png' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='/image/truck.png' alt='img' className={styles.icon_need_down} />
                        <span className={styles.icon_text} >送货上门安装</span>
                    </div>
                    <img src='/image/arrow.png' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='/image/after.png' alt='img' className={styles.icon_need_down} />
                        <span className={styles.icon_text} >售后养护</span>
                    </div>
                </div>
            </div>
        </>
    )
}