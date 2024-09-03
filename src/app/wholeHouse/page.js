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
            <svg className={className} style={{ ...style, display: 'block' }} onClick={onClick} t="1724065022701" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8989" width="20" height="20"><path d="M472.064 272.448l-399.232 399.232c-22.08 22.08-22.08 57.792 0 79.872 22.016 22.016 57.792 22.08 79.872 0L512 392.256l359.296 359.296c22.016 22.016 57.792 22.08 79.872 0 22.08-22.08 22.016-57.792 0-79.872L551.936 272.448C529.856 250.432 494.144 250.432 472.064 272.448z" fill="#e6e6e6" p-id="8990"></path></svg>
        )
    }

    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props
        return (
            <svg className={className} style={{ ...style, display: 'block' }} onClick={onClick} t="1724065022701" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8989" width="20" height="20"><path d="M472.064 272.448l-399.232 399.232c-22.08 22.08-22.08 57.792 0 79.872 22.016 22.016 57.792 22.08 79.872 0L512 392.256l359.296 359.296c22.016 22.016 57.792 22.08 79.872 0 22.08-22.08 22.016-57.792 0-79.872L551.936 272.448C529.856 250.432 494.144 250.432 472.064 272.448z" fill="#e6e6e6" p-id="8990"></path></svg>
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

    const settings_phone = {
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
                    <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/wholehouse.jpg?imageslim' className={styles.head_img} alt='wholehouse' />
                    <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/head_img2.JPG?imageslim' className={styles.head_img_phone} alt='wholehouse' />
                    <h1 className={styles.title_phone}>
                        全屋定制
                    </h1>
                    <div className={styles.down_arrow}>
                        <svg t="1725106748909" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32876" width="64" height="64"><path d="M818.7648 330.1888a38.4 38.4 0 0 1 54.8352 53.6064l-2.7648 2.816L512 717.8752 153.1648 386.5856A38.4 38.4 0 0 1 202.2144 327.68l3.0208 2.5344L512 613.3248l306.7648-283.136z" fill="#cdcdcd" p-id="32877"></path></svg>
                    </div>
                    <div className={styles.head_text}>
                        <h1 className={styles.title}>全屋定制</h1>
                        <p className={styles.head_intro}>亿云高级定制，自2003年成立，专注于提供卓越的全屋定制解决方案，包括衣柜、橱柜、书柜等，精选进口及国产高级板材，融合传统工艺与现代设计。我们致力于以个性化服务和精湛工艺，为您打造既实用又具有美学价值的家居空间，让您的生活空间焕发独特魅力。</p>
                    </div>
                </div>
                <h2 className={styles.subtitle_phone}>定制流程</h2>
                <div className={styles.flow_phone}>
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/designer.png?imageslim' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >设计师对接</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/price.png?imageslim' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >确定方案及报价</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/money.png?imageslim' alt='img' className={styles.money} />
                        <span className={styles.icon_text} >首付款支付</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/factory.png?imageslim' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >工厂下单生产</span>
                    </div>
                </div>
                <div className={styles.flow_phone}>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/money.png?imageslim' alt='img' className={styles.money} />
                        <span className={styles.icon_text} >支付尾款</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/truck.png?imageslim' alt='img' className={styles.icon_need_down} />
                        <span className={styles.icon_text} >送货上门安装</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/after.png?imageslim' alt='img' className={styles.icon_need_down} />
                        <span className={styles.icon_text} >售后养护</span>
                    </div>
                </div>
                <h2 className={styles.subtitle}>细节展示</h2>
                <div className={styles.row}>
                    <div className={styles.slide_container} >

                        <Slider {...settings}>
                            <div >
                                <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/product_detail.jpg?imageslim' alt='detail' className={styles.img} />
                            </div>
                            <div>
                                <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/product_detail2.jpg?imageslim' alt='detail' className={styles.img} />
                            </div>
                            <div>
                                <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/product_detail3.jpg?imageslim' alt='detail' className={styles.img} />
                            </div>
                            <div>
                                <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/product_detail4.jpg?imageslim' alt='detail' className={styles.img} />
                            </div>
                            <div>
                                <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/product_detail5.jpg?imageslim' alt='detail' className={styles.img} />
                            </div>
                        </Slider>
                    </div>

                </div>
                <div className={styles.slider_container}>
                    <Slider {...settings_phone}>
                        <div className={styles.img_box}>
                            <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/product_detail.jpg?imageslim' alt='detail' className={styles.img} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/product_detail2.jpg?imageslim' alt='detail' className={styles.img} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/product_detail3.jpg?imageslim' alt='detail' className={styles.img} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/product_detail4.jpg?imageslim' alt='detail' className={styles.img} />
                        </div>
                        <div className={styles.img_box}>
                            <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/product_detail5.jpg?imageslim' alt='detail' className={styles.img} />
                        </div>

                    </Slider>
                </div>
                <h2 className={styles.subtitle2}>板材介绍</h2>
                <p className={styles.intro}>进口板材选择：意大利可丽芙(CLEAF)、意大利Tabu木皮、 德国丽特曼、德国科尔木皮、德国克诺斯邦、比利时UNILIN、奥地利爱格等</p>
                <div className={styles.row}>
                    <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/board.png?imageslim' className={styles.board} alt='board' />
                </div>
                <p className={styles.intro}>国产合作品牌：瑞格森工、金米龙等高端板材（ENF级环保等级）</p>
                <div className={styles.row}>
                    <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/board_cn.png?imageslim' className={styles.board_cn} alt='board' />
                </div>
                <h2 className={styles.subtitle_phone}>板材介绍</h2>
                <p className={styles.intro_phone}>进口板材：意大利可丽芙(CLEAF)、意大利Tabu木皮、 德国丽特曼、德国科尔木皮、德国克诺斯邦、比利时UNILIN、奥地利爱格等</p>
                <div className={styles.row}>
                    <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/board_mobile.png?imageslim' className={styles.board_mobile} alt='board' />
                </div>
                <div className={styles.row}>
                    <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/board_mobile2.png?imageslim' className={styles.board_mobile2} alt='board' />
                </div>
                <p className={styles.intro_phone}>国产合作品牌：瑞格森工、金米龙等高端板材（ENF级环保等级）</p>
                <div className={styles.row}>
                    <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/board_cn_mobile.png?imageslim' className={styles.board_mobile} alt='board' />
                </div>
                <div className={styles.row}>
                    <img src='http://cdn.yiyunjiancai.com/pages/wholehouse/board_cn_mobile2.png?imageslim' className={styles.board_mobile2} alt='board' />
                </div>
                <h2 className={styles.subtitle2}>定制流程</h2>
                <div className={styles.flow}>
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/designer.png?imageslim' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >设计师对接</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/price.png?imageslim' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >确定方案及报价</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/money.png?imageslim' alt='img' className={styles.money} />
                        <span className={styles.icon_text} >首付款支付</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/factory.png?imageslim' alt='img' className={styles.icon} />
                        <span className={styles.icon_text} >工厂下单生产</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/money.png?imageslim' alt='img' className={styles.money} />
                        <span className={styles.icon_text} >支付尾款</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/truck.png?imageslim' alt='img' className={styles.icon_need_down} />
                        <span className={styles.icon_text} >送货上门安装</span>
                    </div>
                    <img src='http://cdn.yiyunjiancai.com/icons/arrow.png?imageslim' alt='arrow' className={styles.arrow} />
                    <div className={styles.unit}>
                        <img src='http://cdn.yiyunjiancai.com/icons/after.png?imageslim' alt='img' className={styles.icon_need_down} />
                        <span className={styles.icon_text} >售后养护</span>
                    </div>
                </div>
            </div>
        </>
    )
}